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
            Select the AudioFile: 
            <input type="file" name="audioFile" id="audioFile" onChange={(e) => setAudioFile(e.target.value)} />
          </li>

          <li className='upload-form-field'>
            Book title:
            <input type="text" name="bookTitle" id="bookTitle" value={bookTitle} onChange={(e) => setBookTitle(e.target.value)} />
          </li>

          <li className='upload-form-field'>
            Book Author:
            <input type="text" name="" id="" value={bookAuthor} onChange={(e) => setBookAuthor(e.target.value)} />
          </li>

          <li className='upload-form-field'>
            Give a brief description about the book:
            <textarea name="bookDesc" id="bookDesc" cols="30" rows="10" value={bookDesc} onChange={(e) => setBookDesc(e.target.value)}></textarea>
          </li>
        </ul>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default BookUpload
