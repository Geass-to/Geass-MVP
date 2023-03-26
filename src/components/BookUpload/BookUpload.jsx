import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import StyledButton from "../Utility/Button";
import { addBook } from '../../features/bookSilce' 
import '../../styles/bookupload.css'

const BookUpload = () => {
  const dispatch = useDispatch()
  const Navigate = useNavigate()

  const [audioFile, setAudioFile] = useState('')
  const [bookTitle, setBookTitle] = useState('')
  const [bookAuthor, setBookAuthor] = useState('')
  const [bookDesc, setBookDesc] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Check if all values are not empty
    if (audioFile && bookTitle && bookAuthor && bookDesc) {
      const newBook = {
        // audioFile: audioFile,
        title: bookTitle,
        author: bookAuthor,
        description: bookDesc,
      };
      dispatch(addBook(newBook));

      // Clear the input fields
      setAudioFile('');
      setBookTitle('');
      setBookAuthor('');
      setBookDesc('');
      
      // Navigate to userProfile page
      Navigate("/")
    }
  };
  

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <ul className='upload-form'>
          <div className="form-title">
            <span>Upload book</span>
            <hr />
          </div>

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
            <span>Give a brief description about the book:</span> 
            <textarea name="bookDesc" id="bookDesc" cols="30" rows="10" value={bookDesc} required onChange={(e) => setBookDesc(e.target.value)}></textarea>
          </li>
          <li className='upload-form-field submit-field'>
            <StyledButton bgColor="var(--light-dark)">Go Back</StyledButton>
            <StyledButton type="submit">Submit</StyledButton>
          </li>
        </ul>
      </form>
    </div>
  )
}

export default BookUpload
