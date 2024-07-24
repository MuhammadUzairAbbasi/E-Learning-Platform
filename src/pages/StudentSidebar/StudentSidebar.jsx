import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Sidebar from "../../components/Sidebar/Sidebar";
import './studentsidebar.css';
import { UserContext } from "../../App";

const StudentSidebar = ({ isSidebarExpanded, toggleSidebar }) => {
  const {user,setUser}=useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    // Remove user data from local storage
    localStorage.removeItem('user'); 
    setUser(false);// Replace 'user' with the actual key you use to store user data
    // Redirect to login page
    navigate('/login')
  };

  return (
    <div
      className={`left__sidebar__dashboard ${
        isSidebarExpanded ? "expanded" : ""
      }`}
    >
      <IconButton onClick={toggleSidebar}>
        <MenuIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <Sidebar
        Icon={DashboardIcon}
        title="Dashboard"
        link="/"
        isSidebarExpanded={isSidebarExpanded}
      />
      <Sidebar
        Icon={AssignmentIcon}
        title="My Courses"
        link="/mycourses"
        isSidebarExpanded={isSidebarExpanded}
      />
      <Divider component="div" />
      <Sidebar
        Icon={LibraryBooksIcon}
        title="All Courses"
        link="/allcourses"
        isSidebarExpanded={isSidebarExpanded}
      />
      <Sidebar
        Icon={AccountCircleIcon}
        title="Profile"
        link="/profile"
        isSidebarExpanded={isSidebarExpanded}
      />
      <Divider component="div" />
      <Sidebar
        Icon={ExitToAppIcon}
        title="Logout"
        link="#"
        isSidebarExpanded={isSidebarExpanded}
        onClick={handleLogout}
      />
    </div>
  );
};

export default StudentSidebar;
