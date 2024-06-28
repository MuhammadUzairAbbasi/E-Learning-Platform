import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import AllCourses from "./pages/All-Course/AllCourses.jsx";
import Dashboard from './pages/DashBoard/Dashboard.jsx';
import Header from './components/Header/Header';
import Profile from './pages/Profile/Profile';


const App = () => {
  return (
    <div className="app overflow-auto">

      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/all-courses" element={<AllCourses/>}/>
          <Route path="/Profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;
