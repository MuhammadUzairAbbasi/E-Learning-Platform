import { React, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import MessageIcon from "@mui/icons-material/Message";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Container, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import CourseData from "./FakeData/CourseData";
import Body4Card from "./Body4Card/Body4Card";
import CourseCard from "./CourseCard/CourseCard";
import "./dashboard.css";


const Dashboard = () => {
  const user = { userName: "Sami" };
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(1);
  console.log(CourseData);



  return (
    <div className="dashboard">
      <div className="left__sidebar__dashboard">
        <Sidebar Icon={DashboardIcon} title="Dashboard" link="/" />
        <Sidebar Icon={PersonIcon} title="Profile" link="/profile" />
        <Sidebar Icon={TouchAppIcon} title="Grades" link="/grades" />
        <Sidebar Icon={MessageIcon} title="Messages" link="/messages" />
        <Sidebar
          Icon={SettingsApplicationsIcon}
          title="Preferences"
          link="/preferences"
        />
        <Sidebar Icon={ExitToAppIcon} title="Logout" link="/Login" />
      </div>
      <div className="main__body__dashboard">
        <Container>
          <div className="dashboard__header__name">
            <h2 className="dashboard__name">{user && user.userName}</h2>
            <Link to="/">
              <div className="dashboard_link">
                <h3>Dashboard</h3>
              </div>
            </Link>
          </div>
        </Container>

        <div className="body_card_container">
          <Body4Card
            link="/messages"
            shortTitle="Communicate"
            title="Message"
            Icon={MessageIcon}
          />
          <Body4Card
            link="/profile"
            shortTitle="Your Profile"
            title="Profile"
            Icon={AccountCircleIcon}
          />
          <Body4Card
            link="/settings"
            shortTitle="Preferences"
            title="Settings"
            Icon={SettingsApplicationsIcon}
          />
          <Body4Card
            shortTitle="Performance"
            title="Grades"
            Icon={TouchAppIcon}
          />
        </div>
        <Container>
          <div className="recent_courses ">
            <Typography className="recent_courses_header" variant="h6">
              Recently accessed courses
            </Typography>
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
          <div className="recent_courseData">
            {CourseData.length > 0 &&
              CourseData.slice(start,end).map((val, index) => {
                console.log(val,index);
                return (
                  <div key={index}>
                    <CourseCard
                      title={val.title}
                      name={val.name}
                      id={index}
                      img={val.thumbnail}
                      date={val.date}
                    />
                  </div>
                );
              })}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
