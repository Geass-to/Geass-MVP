import React from "react";
import "../../styles/editprofile.css";

const EditProfile = () => {
  return (
    <>
      <div className="banner">
        <img
          src="https://images.hdqwalls.com/download/kimetsu-no-yaiba-anime-4k-yn-1360x768.jpg"
          alt="Banner Image"
        />
      </div>

      <div className="bottomInfo">
        <div className="profileImage">
          <div className="uploadBox">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Kni0rQUyBectTikBTL3j2zb69aiad1qqwsW-6Ttj3UpNcfqoUMFCuOCFcPosYluvIoc&usqp=CAU"
              alt="Profile Image"
            />
          </div>
          <br />
          <span>Upload profile image</span>
        </div>
        <form className="profileDetails">
          <ul>
            <li>
              <span>Name</span>
              
              <input type="text" />
            </li>
            <li>
              <span>Username</span>
              
              <input type="text" />
            </li>
            <li>
              <span>Email Id</span>
              
              <input type="Email" />
            </li>
            <li>
              <span>Password</span>
              
              <input type="password" />
            </li>
            <li>
              <span>Country</span>
              
              <input type="text" />
            </li>
            <li>
              <span>City</span>
              
              <input type="text" />
            </li>
            <li>
              <span>Bio</span>
              <textarea>
              </textarea>
            </li>
            <li>
              <button>Submit</button>
            </li>
          </ul>

        </form>
      </div>
    </>
  );
};

export default EditProfile;
