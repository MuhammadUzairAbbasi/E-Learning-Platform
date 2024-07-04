import { Container, Typography } from '@mui/material';
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
      <div className={`main-content`}>
        <Container>
          <Typography className="text-center my-3 border-bottom" variant="h3" color="primary">
            My Courses
          </Typography>
          <CardOfMyCourse courses={CourseData} />
        </Container>
      </div>
    </div>
  );
};

export default MyCourses;
