import React from "react";
import {useNavigate} from "react-router-dom"
import { IconButton, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import GroupIcon from '@mui/icons-material/Group';
import Sidebar from "../../../components/Sidebar/Sidebar";
import './adminsidebar.css'

const AdminSidebar = ({ isSidebarExpanded, toggleSidebar }) => {
  const navigate=useNavigate();
   const handleLogout = () => {
     // Remove user data from local storage
     localStorage.removeItem("user"); // Replace 'user' with the actual key you use to store user data
     // Redirect to login page
     navigate("/login");
   };
  return (
    <div
      className={`left__sidebar__dashboard ${
        isSidebarExpanded ? "expanded" : ""
      }`}
    >
      <IconButton onClick={toggleSidebar} className="menu-button">
        <MenuIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <Sidebar
        Icon={DashboardIcon}
        title="Dashboard"
        link="/admindashboard"
        isSidebarExpanded={isSidebarExpanded}
      />
      <Sidebar
        Icon={LocalLibraryIcon}
        title="Course"
        link="/admincourses"
        isSidebarExpanded={isSidebarExpanded}
      />
      <Sidebar
        Icon={GroupIcon}
        title="Student"
        link="/adminstudentinfo"
        isSidebarExpanded={isSidebarExpanded}
      />
      <Divider component="div" />
      <Sidebar
        Icon={ExitToAppIcon}
        title="Logout"
        link="/login"
        isSidebarExpanded={isSidebarExpanded}
        onClick={handleLogout}
      />
    </div>
  );
};

export default AdminSidebar;
