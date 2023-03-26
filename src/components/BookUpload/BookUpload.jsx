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
            <input type="file" name="audioFile" id="audioFile" required onChange={(e) => setAudioFile(e.target.value)} />
          </li>

          <li className='upload-form-field'>
            <span>Book title:</span>
            <input type="text" name="bookTitle" id="bookTitle" required value={bookTitle} onChange={(e) => setBookTitle(e.target.value)} />
          </li>

          <li className='upload-form-field'>
            <span>Book Author:</span> 
            <input type="text" name="" id="" value={bookAuthor} required onChange={(e) => setBookAuthor(e.target.value)} />
          </li>

          <li className='upload-form-field'>
            Give a brief description about the book:
            <textarea name="bookDesc" id="bookDesc" cols="30" rows="10" value={bookDesc} required onChange={(e) => setBookDesc(e.target.value)}></textarea>
          </li>
          <button type="submit">Submit</button>
        </ul>
      </form>
    </div>
  )
}

export default BookUpload