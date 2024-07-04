import React from "react";
import { IconButton, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Sidebar from "../../components/Sidebar/Sidebar";

const StudentSidebar = ({ isSidebarExpanded, toggleSidebar }) => {
  return (
    <div
      className={`left__sidebar__dashboard ${
        isSidebarExpanded ? "expanded" : ""
      }`}
    >
      <IconButton onClick={toggleSidebar} className="menu-button">
        <MenuIcon sx={{ fontSize: 30, marginLeft: 1 }} />
      </IconButton>
      <Sidebar
        Icon={DashboardIcon}
        title="Dashboard"
        link="/"
        isSidebarExpanded={isSidebarExpanded}
      />
      <Sidebar
        Icon={TouchAppIcon}
        title="My Courses"
        link="/My-Courses"
        isSidebarExpanded={isSidebarExpanded}
      />
      <Divider component="div" />
      <Sidebar
        title="All Courses"
        link="/All-Courses"
        isSidebarExpanded={isSidebarExpanded}
      />
      <Sidebar
        Icon={SettingsApplicationsIcon}
        title="Settings"
        link="/Settings"
        isSidebarExpanded={isSidebarExpanded}
      />
      <Divider component="div" />
      <Sidebar
        Icon={ExitToAppIcon}
        title="Logout"
        link="/Login"
        isSidebarExpanded={isSidebarExpanded}
      />
    </div>
  );
};

export default StudentSidebar;
