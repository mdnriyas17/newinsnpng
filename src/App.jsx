import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Blogsingle from "./Pages/Singleblogs";
import Blog from "./Pages/Blog";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:id" element={<Blogsingle />} />
      </Routes>
    </>
  );
};

export default App;
