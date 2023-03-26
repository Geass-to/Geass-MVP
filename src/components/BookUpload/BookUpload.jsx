import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '../../features/bookSilce' 
import '../../styles/bookupload.css'

const BookUpload = () => {
  const dispatch = useDispatch()
  const [audioFile, setAudioFile] = useState('')
  const [bookTitle, setBookTitle] = useState('')
  const [bookAuthor, setBookAuthor] = useState('')
  const [bookDesc, setBookDesc] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    // Create an object with the form values
    const newBook = {
      // audioFile: audioFile,
      title: bookTitle,
      author: bookAuthor,
      description: bookDesc,
    }
    console.log(newBook)
    // Dispatch the object to the addBook action
    dispatch(addBook(newBook))

    // Clear the input fields
    setAudioFile('')
    setBookTitle('')
    setBookAuthor('')
    setBookDesc('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ul className='upload-form'>
          <li className='upload-form-field'>
            <span>Select the AudioFile:</span> 
            <input type="file" name="audioFile" id="audioFile" />
          </li>

          <li className='upload-form-field'>
            <span>Book title:</span>
            <input type="text" name="bookTitle" id="bookTitle" />
          </li>

          <li className='upload-form-field'>
            <span>Book Author:</span> 
            <input type="text" name="" id="" />
          </li>

          <li className='upload-form-field'>
            Give a brief description about the book:
            <textarea name="bookDesc" id="bookDesc" cols="30" rows="10"></textarea>
          </li>
        </ul>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default BookUpload
