import React from 'react';
import BookCard from '../utility/BookCard';
import "../../styles/booklist.css";

const Home = () => {
  const bookDetails = {

    bookCoverImg: '',
    bookTitle: 'Who moved my cheese',
    bookAuthor: 'No name',
    bookDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, magnam.'
  }
  
  return (
    <>
      <BookCard bookDetails={bookDetails} />
    </>
  )
}

export default Home;