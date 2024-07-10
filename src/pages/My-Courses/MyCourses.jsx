import { Container, Typography, Box } from '@mui/material';
import React, { useState } from 'react';
import CardOfMyCourse from './cardOfCourse/CardOfMyCourse';
import CourseData from "../DashBoard/FakeData/CourseData";
import StudentSidebar from '../StudentSidebar/StudentSidebar';
import './myCourses.css';

const MyCourses = () => {
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="my-courses">
      <StudentSidebar
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
      <div className="mycourses-main-content">
        <Container>
          <Box className="heading-container">
            <Typography className="text-left heading" variant="h3" color="primary">
              My Courses
            </Typography>
          </Box>
          <div className="card-container">
            {CourseData.map((course, index) => (
              <CardOfMyCourse key={index} course={course} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MyCourses;
