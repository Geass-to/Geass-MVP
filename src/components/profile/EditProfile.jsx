import React from "react";
import "../../styles/editprofile.css";

const EditProfile = () => {
  return (
    <div className="bg-card">
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
              Name <br />
              <input type="text" />
            </li>
            <li>
              Username
              <br />
              <input type="text" />
            </li>
            <li>
              Email Id
              <br />
              <input type="Email" />
            </li>
            <li>
              Password
              <br />
              <input type="password" />
            </li>
            <li>
              Country
              <br />
              <input type="text" />
            </li>
            <li>
              City
              <br />
              <input type="text" />
            </li>
            <li>
              Bio
              <br />
              <input type="text" />
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
