// Redux slice for Books
import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import {
  doc,
  collection,
  addDoc,
  updateDoc,
  getDocs,
  getDoc,
  writeBatch,
  query,
  where
} from "firebase/firestore";
import { db } from "../config/firebase";
import { arrayUnion } from "firebase/firestore";

/*
### Book Info
- bookId
- titile
- description
- length
- tags []
- likes
- genres []

### Book Files
- Text file
- Poster images
- Cover images
- Audio [ chapter1, chapter2 . . .]
*/
/*
bookId -> User's uid

*/

const collectionName = "booktest";

// Async Thunk to add a new book to Firestore
export const addBook = createAsyncThunk("books/addBook", async (newBook, { getState }) => {
  const { auth } = getState();
  const userUid = auth.currentUser.uid;
  const bookWithUid = { ...newBook, userUid: userUid };
  const bookRef = collection(db, collectionName);
  const batch = writeBatch(db);
  const docRef = await addDoc(bookRef, bookWithUid, { batch });
  const bookId = docRef.id;
  const userRef = doc(db, "usertest", userUid);
  batch.update(userRef, {
    booklist: arrayUnion(bookId),
  });
  await batch.commit();
  return { id: bookId, ...bookWithUid };
});

// Async Thunk to get all books from Firestore
export const getBooks = createAsyncThunk("books/getBooks", async () => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  console.log(querySnapshot)
  const books = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return books;
});

// Async Thunk to get one books from Firestore
export const getBookById = createAsyncThunk("books/getBookById", async (bookId) => {
  const bookRef = doc(db, collectionName, bookId)
  const books = await getDoc(bookRef);
  // console.log(books)
  return { ...books.data(), id: books.id};
});

// Async Thunk to get books from Firestore
export const getBookByIds = createAsyncThunk("books/getBookByIds", async (bookIds) => {

  const booksPromises  = await bookIds.map(async (bookId) => {
    const bookRef = doc(db, collectionName, bookId)
    const book = await getDoc(bookRef);
    // console.log(book.data())
    return { ...book.data(), id: book.id};
  });
  const books = await Promise.all(booksPromises);
  console.log(books)
  return books;
});

// Async Thunk to get books for search from Firestore
export const getBookByName = createAsyncThunk("books/getBookByName", async (searchQuery) => {

  console.log("getBookByName called with book name:", searchQuery);
  let data

  // const subQueries = query.split(" ");
  // const booksQuery = collection(db, collectionName);

  // subQueries.forEach((subQuery) => {
  //   booksQuery = query(booksQuery,where("title", ">=", subQuery),where("title", "<=", subQuery + "\uf8ff"));
  // });

  try {
    const q = query(collection(db, collectionName), where("title", ">=", searchQuery), where("title", "<=", searchQuery + "\uf8ff"));
    const querySnapshot = await getDocs(q);
    console.log(q)  
    data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error(error);
  }
  // console.log(data);
  return data;
});

// Async Thunk to update a book in Firestore
export const updateBook = createAsyncThunk(
  "books/updateBook",
  async ({ id, updatedBook }) => {
    const bookRef = doc(db, collectionName, id);
    await updateDoc(bookRef, updatedBook);
    return { id, ...updatedBook };
  }
);

// Redux slice for Books
const booksSlice = createSlice({
  name: "books",
  initialState: {
    booksList: [],
    singleBook: "",
    status: "idle",
    error: null,
    selectedBookId: null,
  },
  reducers: {
    setSelectedBookId: (state, action) => {
      state.selectedBookId = action.payload;
    },
  },
  extraReducers: {
    [addBook.pending]: (state) => {
      state.status = "loading";
    },
    [addBook.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.booksList.push(action.payload);
    },
    [addBook.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [getBooks.pending]: (state) => {
      state.status = "loading";
    },
    [getBooks.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.booksList = action.payload;
    },
    [getBooks.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [getBookById.pending]: (state) => {
      state.status = "loading";
    },
    [getBookById.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.singleBook = action.payload; // update singleBook property
    },
    [getBookById.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [getBookByIds.pending]: (state) => {
      state.status = "loading";
    },
    [getBookByIds.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.booksList = action.payload;
    },
    [getBookByIds.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [getBookByName.pending]: (state) => {
      state.status = "loading";
    },
    [getBookByName.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.booksList = action.payload;
    },
    [getBookByName.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [updateBook.pending]: (state) => {
      state.status = "loading";
    },
    [updateBook.fulfilled]: (state, action) => {
      state.status = "succeeded";
      const index = state.booksList.findIndex(
        (book) => book.id === action.payload.id
      );
      state.booksList[index] = action.payload;
    },
    [updateBook.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const { setSelectedBookId } = booksSlice.actions;

export const selectSingleBook = (state) => state.books.singleBook;
export const selectBooks = (state) => state.books.booksList;
export const getBookStatus = (state) => state.books.status;
export const getBookError = (state) => state.books.error;

export default booksSlice.reducer;
