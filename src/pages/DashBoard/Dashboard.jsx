import React, { useState } from "react";
import { Container } from "@mui/material";
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
            <div className="dashboard__header__name">
              <h2 className="dashboard__name text-2xl font-semibold">
                {user && user.userName}
              </h2>
              <Link to="/">
                <div className="dashboard_link">
                  <h3>Dashboard</h3>
                </div>
              </Link>
            </div>
          </Container>
          <Container>
            <div className="course__container">
              {CourseData.map((course, index) => (
                <div key={index} className="course__wrapper">
                  <CourseCard
                    title={course.title}
                    name={course.name}
                    img={course.thumbnail}
                    date={course.date}
                    lectures={course.lectures}
                    progress={course.progress}
                  />
                </div>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
