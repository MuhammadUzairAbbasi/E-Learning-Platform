import React, { createContext, useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
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
import CourseTable from "./pages/Admin/Course/CourseTable/CourseTable.jsx";
import CoursePage from "./pages/Admin/Course/CoursePage/CoursePage.jsx";
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
export default App;

const ConditionalRoutes = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && location.pathname !== "/login" && location.pathname !== "/register") {
      navigate("/login");
    }
  }, [user, location.pathname, navigate]);

  const renderProtectedRoute = (Component, role = null) => {
    if (!user) {
      return <Navigate to="/login" />;
    }
    if (role && user.role !== role) {
      return <Navigate to="/" />;
    }
    return <Component />;
  };

  const isNotFound = location.pathname === "/404";

  return (
    <>
      {user && !isNotFound && <Header />}
      <Routes>
        <Route
          exact
          path="/"
          element={
            user ? (
              user.role === "Admin" ? (
                <Navigate to="/admindashboard" />
              ) : (
                <Dashboard />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/courses" element={renderProtectedRoute(AllCourses)} />
        <Route path="/profile" element={renderProtectedRoute(Profile)} />
        <Route path="/mycourses" element={renderProtectedRoute(MyCourses)} />
        <Route path="/allcourses" element={renderProtectedRoute(AllCourses)} />
        <Route
          path="/courseinfo/:title"
          element={renderProtectedRoute(CourseInfo)}
        />
        <Route
          path="/admincourses"
          element={renderProtectedRoute(AdminCourses, "Admin")}
        />
        <Route
          path="/admindashboard"
          element={renderProtectedRoute(AdminDashboard, "Admin")}
        />
        <Route
          path="/adminstudentinfo"
          element={renderProtectedRoute(StudentInfo, "Admin")}
        />
        <Route
          path="/coursetable"
          element={renderProtectedRoute(CourseTable, "Admin")}
        />
        <Route
          path="/courses/:courseId"
          element={renderProtectedRoute(CoursePage)}
        />

        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </>
  );
};



