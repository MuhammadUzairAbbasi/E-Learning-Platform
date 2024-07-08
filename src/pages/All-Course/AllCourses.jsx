import { Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import CardOfAllCourse from './cardOfCourse/CardOfAllCourse';
import StudentSidebar from '../StudentSidebar/StudentSidebar';
import './allCourses.css';

const AllCourses = () => {
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="all-courses">
      <StudentSidebar
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
      <div className="main-content">
        <Container>
          <Typography className="text-center my-3 border-bottom" variant="h3" color="primary">
            All Courses
          </Typography>
          <CardOfAllCourse />
        </Container>
      </div>
    </div>
  );
};

export default AllCourses;
