import React, { useContext, useEffect, useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import CardOfMyCourse from "./cardOfCourse/CardOfMyCourse";
import StudentSidebar from "../StudentSidebar/StudentSidebar";
import styles from "./myCourses.module.css";
import { baseServerUrl } from "../../constants";
import { UserContext } from "../../App";
import axios from "axios";

const MyCourses = () => {
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);
  const [courses, setCourses] = useState([]);
  const { user } = useContext(UserContext);

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        const { data } = await axios.get(
          `${baseServerUrl}/api/enroll/${user._id}/enrolled-courses`
        );
        setCourses(data);
      } catch (error) {
        console.log("No Courses enrolled", error);
      }
    };

    fetchEnrolledCourses();
  }, [user._id]);

  return (
    <div className={styles.myCourses}>
      <StudentSidebar
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
      <div className={styles.mycoursesMainContent}>
        <Container>
          <Box className={styles.headingContainer}>
            <Typography
              sx={{ fontWeight: 600 }}
              className={styles.heading}
              variant="h4"
              color="primary"
            >
              My Courses
            </Typography>
          </Box>
          <div className={styles.cardContainer}>
            {courses.map((course, index) => (
              <CardOfMyCourse key={index} course={course} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MyCourses;
