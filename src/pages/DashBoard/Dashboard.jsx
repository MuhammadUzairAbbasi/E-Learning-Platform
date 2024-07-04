import React, { useState } from "react";
import { Container, IconButton, Divider } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import CourseData from "./FakeData/CourseData";
import Body4Card from "./Body4Card/Body4Card";
import CourseCard from "./CourseCard/CourseCard";
import StudentSidebar from "../StudentSidebar/StudentSidebar";

import "./dashboard.css";

const Dashboard = () => {
  const user = { userName: "Sami" };
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(1);
  console.log(CourseData);

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
          <div className="body_card_container">
            <Body4Card
              link="/Profile"
              title="Profile"
              Icon={AccountCircleIcon}
            />
            <Body4Card
              link="/settings"
              title="Settings"
              Icon={SettingsApplicationsIcon}
            />
            <Body4Card
              link="/My-Courses"
              title="My Courses"
              Icon={TouchAppIcon}
            />
            <Body4Card
              link="/All-Courses"
              title="All Courses"
              Icon={TouchAppIcon}
            />
          </div>
          <Container>
            <div className="recent_courses">
              <h4 className="recent_courses_header text-lg font-semibold">
                Recently accessed courses
              </h4>
              <div className="recent_courses_button">
                <IconButton
                  onClick={() => {
                    if (start == 0 || end == 0) {
                      setEnd(CourseData.length);
                      setStart(CourseData.length - 1);
                    } else {
                      setStart(start - 1);
                      setEnd(end - 1);
                    }
                    console.log(start, end);
                  }}
                >
                  <ArrowBackIosIcon />
                </IconButton>
                <IconButton
                  onClick={() => {
                    if (CourseData.length == end) {
                      setStart(0);
                      setEnd(1);
                    } else {
                      setStart(start + 1);
                      setEnd(end + 1);
                    }
                  }}
                >
                  <ArrowForwardIosIcon />
                </IconButton>
              </div>
            </div>
            <div className="recent_courseData mt-3">
              {CourseData.length > 0 &&
                CourseData.slice(start, end).map((val, index) => {
                  console.log(val, index);
                  return (
                    <div key={index}>
                      <CourseCard
                        title={val.title}
                        name={val.name}
                        id={index}
                        img={val.thumbnail}
                        date={val.date}
                        lectures={val.lectures}
                      />
                    </div>
                  );
                })}
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
