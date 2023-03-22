import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LogIn } from "./components/Auth/LogIn";
import { SignUp } from "./components/Auth/SignUp";
import Home from "./components/HomePage/Home";
import { Scroll_Items } from "./components/HomePage/Scroll_Items";
import { Layout } from "./components/Layout";
import "./styles/style.css";
import "./styles/animate.css";
import { AuthContext } from "./context/AuthContext";
import Profile from "./components/ProfilePage/Profile";
import EditProfile from "./components/ProfilePage/EditProfile";
import { Provider } from "react-redux";
import { store } from "./features/Store";

function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  console.log(currentUser);

  return (
    <Provider store={store} >
      <Routes>
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/" element={<Layout />}>
          <Route index
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />

          <Route path="profile">
            <Route index
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
            <Route path="editprofile"
              element={
                <RequireAuth>
                  <EditProfile />
                </RequireAuth>
              }
            />
          </Route>
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
