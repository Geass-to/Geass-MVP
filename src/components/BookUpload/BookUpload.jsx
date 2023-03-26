import React from 'react'
import "../../styles/bookupload.css"

const BookUpload = () => {


   
  return (
    <div>
      <form>
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
            <span>Give a brief descript</span>ion about the book:
            <textarea name="bookDesc" id="bookDesc" cols="30" rows="10"></textarea>
          </li>
        </ul>

      </form>
    </div>
  )
}

export default BookUpload