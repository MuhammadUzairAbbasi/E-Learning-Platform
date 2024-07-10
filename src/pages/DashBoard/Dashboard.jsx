import React, { useState } from "react";
import { Container ,Typography ,Box } from "@mui/material";
import { Link } from "react-router-dom";
import CourseData from "./FakeData/CourseData";
import CourseCard from "./CourseCard/CourseCard";
import StudentSidebar from "../StudentSidebar/StudentSidebar";
import "./dashboard.css";

const Dashboard = () => {
  const user = { userName: "Sami" };
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-wrapper">
        <StudentSidebar
          isSidebarExpanded={isSidebarExpanded}
          toggleSidebar={toggleSidebar}
        />
        <div className="main__body__dashboard">
          <Container>
            <Box className="dashboard-header">
            <Typography sx={{'fontWeight':600}} className="text-left heading" variant="h4" color="primary">
              {user && user.userName}
            </Typography>
            <Typography className="text-right heading dashboard-link" variant="h4" color="primary">
              Dashboard
            </Typography>
            
          </Box>
            {/* <div className="dashboard__header__name">
              <h2 className="dashboard__name text-2xl font-semibold">
                {user && user.userName}
              </h2>
              <Link to="/">
                <div className="dashboard_link">
                  <h3>Dashboard</h3>
                </div>
              </Link>
            </div> */}
          </Container>
          <Container>
            <div className="course__container">
              {CourseData.map((course, index) => (
                <CourseCard
                    title={course.title}
                    name={course.name}
                    img={course.thumbnail}
                    date={course.date}
                    lectures={course.lectures}
                    progress={course.progress}
                  />
              ))}
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
