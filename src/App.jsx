import React, { createContext, useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
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
import StudentInfo from "./pages/Admin/Student/StudentInfo.jsx";
import AdminDashboard from "./pages/Admin/AdminDashboard/AdminDashboard.jsx";


// Create UserContext
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const App = () => {
  return (
    <div className="app overflow-auto">
      <UserProvider>
        <Router>
          <ConditionalRoutes />
        </Router>
      </UserProvider>
    </div>
  );
};

const ConditionalRoutes = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();

  useEffect(() => {
    if (!user) {
      if (location.pathname !== "/login" && location.pathname !== "/register") {
        window.location.href = "/login";
      }
    }
  }, [user, location.pathname]);

  const isNotFound = location.pathname === '/404';

  return (
    <>
      {user && !isNotFound && <Header />}

      <Routes>
        <Route exact path="/" element={user ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
        <Route path="/courses" element={user ? <AllCourses /> : <Navigate to="/login" />} />
        <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/mycourses" element={user ? <MyCourses /> : <Navigate to="/login" />} />
        <Route path="/courseinfo/:title" element={user ? <CourseInfo /> : <Navigate to="/login" />} />
        <Route path="/admincourses" element={user ? <AdminCourses /> : <Navigate to="/login" />} />
        <Route path="/admindashboard" element={user ? <AdminDashboard /> : <Navigate to="/login" />} />
        <Route path="/adminstudentinfo" element={user ? <StudentInfo /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
