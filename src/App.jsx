import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import AllCourses from "./pages/All-Course/AllCourses.jsx";
import Dashboard from "./pages/DashBoard/Dashboard.jsx";
import Header from "./components/Header/Header";
import Profile from "./pages/Profile/Profile";
import CourseInfo from "./pages/CourseInfo/CourseInfo";
import MyCourses from "./pages/My-Courses/MyCourses.jsx";
import NotFound from "./pages/404NotFound/NotFound.jsx";
import AdminCourses from "./pages/Admin/Course/AdminCourses.jsx";
import AdminSidebar from "./pages/Admin/AdminDashboard/AdminSidebar/AdminSidebar.jsx";
import AdminDashboard from "./pages/Admin/AdminDashboard/AdminDashboard.jsx";

const App = () => {
  return (
    <div className="app overflow-auto">
      <Router>
        <ConditionalRoutes />
      </Router>
    </div>
  );
};

const ConditionalRoutes = () => {
  const location = useLocation();
  const isNotFound = location.pathname === '/404';

  return (
    <>
      {!isNotFound && <Header />}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/all-courses" element={<AllCourses />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-courses" element={<MyCourses />} />
        <Route path="/course-info/:title" element={<CourseInfo />} />
        <Route path="/admincourses" element={<AdminCourses />} />
        <Route path="/admindashboard" element={<AdminDashboard />} / >
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
