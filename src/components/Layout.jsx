import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import NavBar from './NavBar';
import "../styles/style.css";


export const Layout = () => {
  return (
    <>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </>
  )
}
