import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, selectUser } from "../../features/userSlice";
import "../../styles/userlist.css";

const UserList = () => {
    const dispatch = useDispatch();
    const userList = useSelector((state) => state.user.userList);
    const status = useSelector((state) => state.user.status);
    const error = useSelector((state) => state.user.error);
  
    useEffect(() => {
      dispatch(getUsers());
    }, [dispatch]);
  
    if (status === "loading") {
      return <div>Loading...</div>;
    }
  
    if (status === "failed") {
      return <div>{error}</div>;
    }

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
