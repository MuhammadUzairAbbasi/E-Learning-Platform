import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import AllCourses from "/src/components/All-Course/AllCourses.jsx";

const App = () => {
  return (
    <div className="app overflow-auto">
      <BrowserRouter>
      
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/all-courses" element={<AllCourses/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
