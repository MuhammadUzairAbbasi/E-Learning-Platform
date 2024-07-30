import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Box } from "@mui/material";
import CourseCard from "./CourseCard/CourseCard";
import StudentSidebar from "../StudentSidebar/StudentSidebar";
import styles from "./dashboard.module.css"; // Import CSS Module
import { UserContext } from "../../App";
import axios from "axios";
import { baseServerUrl } from "../../constants";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        const response = await axios.get(
          `${baseServerUrl}/api/enroll/${user._id}/enrolled-courses`
        );
        setCourseData(response.data); 
        console.log(response.data);// Set the fetched data to state
      } catch (error) {
        console.error("No courses enrolled:", error);
      }
    };

    fetchEnrolledCourses();
  }, [user._id]);

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardWrapper}>
        <StudentSidebar
          isSidebarExpanded={isSidebarExpanded}
          toggleSidebar={toggleSidebar}
        />
        <div className={styles.mainBodyDashboard}>
          <Container>
            <Box className={styles.dashboardHeader}>
              <Typography
                sx={{ fontWeight: 600 }}
                className="text-left heading"
                variant="h4"
                color="primary"
              >
                {user && user.username}
              </Typography>
              <Typography
                className={styles.dashboardLink}
                variant="h4"
                color="primary"
              >
                Dashboard
              </Typography>
            </Box>
          </Container>
          <Container>
            <div className={styles.courseContainer}>
              {courseData.map((course) => (
                <Link to={`/courseinfo/${course.course[0]._id}`}>
                  <CourseCard
                    key={course._id}
                    name={course.course[0].name}
                    img={course.course[0].thumbnail}
                    date={course.enrollmentDate}
                    progress={course.progress}
                  />
                </Link>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
