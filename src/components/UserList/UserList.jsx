import React, { useEffect, useState } from "react";
import "../../styles/userlist.css";
import { db } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";

const UserList = () => {
  const [userList, setUserList] = useState("");
  const usersCollectionRef = collection(db, "usertest");

  useEffect(() => {
    const getUserList = async () => {
      try {
        const data = await getDocs(usersCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setUserList(filteredData);
        console.log(filteredData);
      } catch (error) {
        console.error(error);
      }
    };
    getUserList();
  }, []);

  return (
    <div className="user-list">
      {userList.map((user) => (
        <ul>
          <li>{user.Name}</li>
          <li>{user.Username}</li>
          <li>{user.Bio}</li>
          <li>{user.Email}</li>
          <li>{user.City}</li>
          <li>{user.Country}</li>
        </ul>
      ))}
    </div>
  );
};

export default UserList;
