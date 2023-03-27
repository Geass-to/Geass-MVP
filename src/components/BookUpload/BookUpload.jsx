import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import StyledButton from "../Utility/Button";
import { addBook } from "../../features/bookSilce";
import "../../styles/bookupload.css";
import { storage } from "../../config/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const BookUpload = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  // const [audioFile, setAudioFile] = useState("");
  // const [coverImage, setCoverImage] = useState("");
  const [audioFileURL, setAudioFileURL] = useState("");
  const [coverImageURL, setCoverImageURL] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookDesc, setBookDesc] = useState("");

  const handleAudioFileUpload = async (e) => {
    const file = e.target.files[0];
    console.log(file);
    const audioRef = ref(storage, `audio/${file.name}`);
    uploadBytes(audioRef, file)
      .then((snapshot) => {
        console.log("Uploaded file successfully:", snapshot);
        getDownloadURL(snapshot.ref).then((url) => {
          setAudioFileURL(url);
        })
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
    };
    
    const handleCoverImageUpload = async (e) => {
      const file = e.target.files[0];
      const imageRef = ref(storage, `images/${file.name}`);
      uploadBytes(imageRef, file)
        .then((snapshot) => {
          console.log("Uploaded file successfully:", snapshot);
          getDownloadURL(snapshot.ref).then((url) => {
            setCoverImageURL(url);
          })
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
        });    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all values are not empty
    if (audioFileURL && coverImageURL && bookTitle && bookAuthor && bookDesc) {
      const newBook = {
        audioFile: audioFileURL,
        coverImage: coverImageURL,
        title: bookTitle,
        author: bookAuthor,
        description: bookDesc,
      };
      dispatch(addBook(newBook));

      // Clear the input fields      
      setAudioFileURL("");
      setCoverImageURL("");
      setBookTitle("");
      setBookAuthor("");
      setBookDesc("");

      // Navigate to userProfile page
      Navigate("/");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ul className="upload-form">
          <div className="form-title">
            <span>Upload book</span>
            <hr />
          </div>

          <li className="upload-form-field">
            <span>Select the AudioFile:</span>
            {/*<input
              type="file"
              name="audioFile"
              id="audioFile"
              required
              onChange={(e) => setAudioFile(e.target.value)}
              />*/}
            <input
              type="file"
              name="audioFile"
              id="audioFile"
              required
              onChange={handleAudioFileUpload}
            />
          </li>

          <li className="upload-form-field">
            <span>Cover image for the book</span>
            {/*<input
              type="file"
              name="coverImage"
              id="coverImage"
              required
              onChange={(e) => setCoverImage(e.target.value)}
            />*/}
            <input
              type="file"
              name="coverImage"
              id="coverImage"
              required
              onChange={handleCoverImageUpload}
            />
          </li>

          <li className="upload-form-field">
            <span>Book title:</span>
            <input
              type="text"
              name="bookTitle"
              id="bookTitle"
              required
              value={bookTitle}
              onChange={(e) => setBookTitle(e.target.value)}
            />
          </li>

          <li className="upload-form-field">
            <span>Book Author:</span>
            <input
              type="text"
              name=""
              id=""
              value={bookAuthor}
              required
              onChange={(e) => setBookAuthor(e.target.value)}
            />
          </li>

          <li className="upload-form-field">
            <span>Give a brief description about the book:</span>
            <textarea
              name="bookDesc"
              id="bookDesc"
              cols="30"
              rows="10"
              value={bookDesc}
              required
              onChange={(e) => setBookDesc(e.target.value)}
            ></textarea>
          </li>
          <li className="upload-form-field submit-field">
            <StyledButton bgColor="var(--light-dark)">Go Back</StyledButton>
            <StyledButton type="submit" >Submit</StyledButton>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default BookUpload;
