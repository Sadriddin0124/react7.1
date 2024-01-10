import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Navbar from "./components/Navbar/Navbar";
import Comments from "./components/Comments/Comments";
import Albums from "./components/Albums/Albums";
import Photos from "./components/Photos/Photos";
import Todos from "./components/Todos/Todos";
const App = () => {
  const [nextPage, setNextPage] = useState(1);
  const handleNext = () => {
    setNextPage((prev) => prev - 1);
  };
  const handlePrev = () => {
    setNextPage((prev) => prev + 1);
  };
  return (
    <div classname="container">
      <div className=" d-flex gap-5">
        <div>
        <Navbar setNextPage={setNextPage}/>
        </div>
        <div className='ms-5'>
          <Routes>
            <Route path="/" element={<Posts nextPage={nextPage} setNextPage={setNextPage} handleNext={handleNext} handlePrev={handlePrev}/>}></Route>
            <Route path="comments" element={<Comments nextPage={nextPage} setNextPage={setNextPage} handleNext={handleNext} handlePrev={handlePrev}/>}></Route>
            <Route path="albums" element={<Albums nextPage={nextPage} setNextPage={setNextPage} handleNext={handleNext} handlePrev={handlePrev}/>}></Route>
            <Route path="photos" element={<Photos nextPage={nextPage} setNextPage={setNextPage} handleNext={handleNext} handlePrev={handlePrev}/>}></Route>
            <Route path="todos" element={<Todos nextPage={nextPage} setNextPage={setNextPage} handleNext={handleNext} handlePrev={handlePrev}/>}></Route>
            <Route path="users" element={<Users nextPage={nextPage} setNextPage={setNextPage} handleNext={handleNext} handlePrev={handlePrev}/>}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
