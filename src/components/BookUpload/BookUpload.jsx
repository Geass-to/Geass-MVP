import React from 'react'
import "../../styles/bookupload.css"

const BookUpload = () => {


   
  return (
    <div>
      <form>
        <ul className='upload-form'>
          <li className='upload-form-field'>
            Select the AudioFile: 
            <input type="file" name="audioFile" id="audioFile" />
          </li>

          <li className='upload-form-field'>
            Book title:
            <input type="text" name="bookTitle" id="bookTitle" />
          </li>

          <li className='upload-form-field'>
            Book Author:
            <input type="text" name="" id="" />
          </li>

          <li className='upload-form-field'>
            Give a brief description about the book:
            <textarea name="bookDesc" id="bookDesc" cols="30" rows="10"></textarea>
          </li>
        </ul>

      </form>
    </div>
  )
}

export default BookUpload