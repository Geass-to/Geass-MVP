import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import StyledButton from "../Utility/Button";
import { addBook } from "../../features/bookSilce";
import "../../styles/bookupload.css";
import { storage } from "../../config/firebase";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const BookUpload = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const [audioFileURL, setAudioFileURL] = useState("");
  const [coverImageURL, setCoverImageURL] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookDesc, setBookDesc] = useState("");

  const [audioUploadProgress, setAudioUploadProgress] = useState(0);
  const [imageUploadProgress, setImageUploadProgress] = useState(0);

  // Function to upload audiofile to cloud
  const handleAudioFileUpload = async (e) => {
    const file = e.target.files[0];
    const audioRef = ref(storage, `audio/${file.name + v4()}`);

    const metadata = {
      contentType: file.type,
    };

    const uploadTask = uploadBytesResumable(audioRef, file, metadata);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get the progress percentage
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log(`Upload is ${progress}% done`);
        setAudioUploadProgress(progress);
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED:
            console.log("Upload paused");
            break;
          case firebase.storage.TaskState.RUNNING:
            console.log("Upload running");
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setAudioFileURL(downloadURL);
          console.log("Upload successful");
        });
      }
    );
  };

  // Function to upload cover image to cloud
  const handleCoverImageUpload = async (e) => {
    const file = e.target.files[0];
    const imageRef = ref(storage, `images/${file.name + v4()}`);
    const metadata = {
      contentType: file.type,
    };
    const uploadTask = uploadBytesResumable(imageRef, file, metadata);

    // Create a listener to track the upload progress
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get the progress percentage
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log("Upload is " + progress + "% done");
        setImageUploadProgress(progress);
      },
      (error) => {
        console.error("Error uploading file:", error);
      },
      () => {
        // Once the upload is complete, get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setCoverImageURL(url);
        });
      }
    );
  };

  // Function that run after submit
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

  const handleGoBack = () => {
    Navigate("/");
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
            <input
              type="file"
              name="audioFile"
              id="audioFile"
              required
              onChange={handleAudioFileUpload}
            />
            <progress max="100" value={audioUploadProgress}></progress>
          </li>

          <li className="upload-form-field">
            <span>Cover image for the book</span>
            <input
              type="file"
              name="coverImage"
              id="coverImage"
              required
              onChange={handleCoverImageUpload}
            />
            <progress max="100" value={imageUploadProgress}></progress>
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
            <StyledButton bgColor="var(--light-dark)" onClick={handleGoBack}>Go Back</StyledButton>
            <StyledButton type="submit">Submit</StyledButton>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default BookUpload;


