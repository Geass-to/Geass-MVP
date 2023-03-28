import React from 'react';
import BookCard from '../utility/BookCard';
import "../../styles/booklist.css";

const Home = () => {
  const booksDetails = [
    {
      audioUrl: '123123',
      bookCoverImg: '/src/assets/images/cover1.jpg',
      bookTitle: 'Who moved my cheese',
      bookAuthor: 'No name',
      bookDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, magnam.'
    },
    {
      audioUrl: '123123',
      bookCoverImg: '/src/assets/images/cover1.jpg',
      bookTitle: 'Who moved my cheese',
      bookAuthor: 'No name',
      bookDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, magnam.'
    },
    {
      audioUrl: '123123',
      bookCoverImg: '/src/assets/images/cover1.jpg',
      bookTitle: 'Who moved my cheese',
      bookAuthor: 'No name',
      bookDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, magnam.'
    },
    {
      audioUrl: '123123',
      bookCoverImg: '/src/assets/images/cover1.jpg',
      bookTitle: 'Who moved my cheese',
      bookAuthor: 'No name',
      bookDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, magnam.'
    },
    {
      audioUrl: '123123',
      bookCoverImg: '/src/assets/images/cover1.jpg',
      bookTitle: 'Who moved my cheese',
      bookAuthor: 'No name',
      bookDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, magnam.'
    }
  ];

  return (
    <>
      <div className='book-list'>
        {/* <BookCard bookDetails={booksDetails[0]}/> */}
        {
          booksDetails.map(bookDetails => (
            <BookCard bookDetails={bookDetails} />
          ))
        }
      </div>
    </>
  )
}

export default Home;