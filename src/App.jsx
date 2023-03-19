import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home  from './components/HomePage/Home';
import { Scroll_Items } from './components/HomePage/Scroll_Items';
import { Layout } from './components/Layout';

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route index element={<Home/>}  />
      </Route>
    </Routes>
  )
}

export default App
