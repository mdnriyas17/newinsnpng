import React from 'react'
import "./App.css";
import Home from './Pages/Home';
import { Routes, Route } from "react-router-dom";
import Blogsingle from './components/Blogsingle';
const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs/:id" element={<Blogsingle />} />
    </Routes>
    </>
  )
}

export default App