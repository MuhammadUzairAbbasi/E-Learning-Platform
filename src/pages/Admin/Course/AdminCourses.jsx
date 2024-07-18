import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import AddCourseModal from "./AddCourseModal/AddCourseModal";
import CourseTable from "./CourseTable/CourseTable";
import add_icon from "./images/add-icon.svg";
import axios from "axios";
import "./AdminCourses.css";
import { baseServerUrl } from "../../../constants";

const AdminCourses = () => {
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [courses, setCourses] = useState([]);

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };

  const handleShowAdd = () => {
    setShowAdd(true);
  };

  const handleCloseAdd = () => {
    setShowAdd(false);
  };

  const addCourse = (course) => {
    setCourses((prevCourses) => [...prevCourses, course]);
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          `${baseServerUrl}/api/courses/getcourses`
        );
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const handleDeleteCourse = async (courseId) => {
    try {
      console.log("Deleting course ID:", courseId);
      await axios.delete(
        `${baseServerUrl}/api/courses/deletecourse/${courseId}`
      );

      // Update the course list immediately after deletion
      setCourses((prevCourses) =>
        prevCourses.filter((course) => course._id !== courseId)
      );
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  return (
    <div className="admin-courses">
      <AdminSidebar
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
      <div className="main-content">
        <section className="course-info">
          <div className="container course-info-container">
            <div className="heading_container">
              <h1 className="course-info-heading">Course Info</h1>
              <Button
                className="Addbtn"
                onClick={handleShowAdd}
                style={{
                  float: "right",
                  backgroundColor: "#007bff",
                  color: "white",
                  marginBottom: 5,
                }}
              >
                <img src={add_icon} alt="Add Course" className="card-image" />
                Add Course
              </Button>
            </div>

            <CourseTable
              courses={courses}
              handleDeleteCourse={handleDeleteCourse}
            />
          </div>
        </section>
      </div>

      <AddCourseModal
        open={showAdd}
        handleClose={handleCloseAdd}
        addCourse={addCourse}
      />
    </div>
  );
};

export default AdminCourses;
