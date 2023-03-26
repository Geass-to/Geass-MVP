// Redux slice for Books
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  doc,
  collection,
  addDoc,
  updateDoc,
  getDocs,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { auth } from "../config/firebase";

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
export const addBook = createAsyncThunk("books/addBook", async (newBook) => {

  const bookRef = collection(db, collectionName)
  const docRef = await addDoc(bookRef, newBook);
  return { id: docRef.id, ...newBook };
  
});

// Async Thunk to get all books from Firestore
export const getBooks = createAsyncThunk("books/getBooks", async () => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const books = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return books;
});

// Async Thunk to get one books from Firestore
export const getBook = createAsyncThunk("books/getBook", async () => {
  const querySnapshot = await getDoc(collection(db, collectionName));
  const books = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return books;
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

export default booksSlice.reducer;
