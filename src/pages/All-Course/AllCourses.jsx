import { Container, Typography, Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CardOfAllCourse from "./cardOfCourse/CardOfAllCourse";
import StudentSidebar from "../StudentSidebar/StudentSidebar";
import "./allCourses.css";
import { baseServerUrl } from "../../constants";

const AllCourses = () => {
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          `${baseServerUrl}/api/courses/getcourses`
        );
        setCourses(response.data);
      } catch (err) {
        setError(err.message);
      } 
    };

    fetchCourses();
  }, []);

 

  if (error) {
    return <Typography variant="h5">Error: {error}</Typography>;
  }

  return (
    <div className="all-courses">
      <StudentSidebar
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
      <div className="allcourses-main-content">
        <Container>
          <Box className="allcourses-heading-container">
            <Typography
              sx={{ fontWeight: 600 }}
              className="text-left heading"
              variant="h4"
              color="primary"
            >
              All Courses
            </Typography>
          </Box>
          <div className="allcourses-card-container">
            {courses.length === 0 ? (
              <div className="noCoursesMessage">
                <Typography variant="h6" color="textSecondary">
                  No courses available.
                </Typography>
              </div>
            ) : (
              courses.map((course, index) => (
                <CardOfAllCourse key={index} course={course} />
              ))
            )}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AllCourses;
