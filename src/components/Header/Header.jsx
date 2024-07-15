import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IconButton, Avatar } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SettingsIcon from "@mui/icons-material/Settings";
import { Button } from "@mui/material";
import logo from "../../assets/Logo.jpg";

import "./header.css";
import { UserContext } from "../../App";

const Header = () => {
  
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="left__header">
          <img src={logo} alt="Logo" />
          <h5>Edu Hub</h5>
        </div>
        <div className="right__header">
          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <Link to="/profile">
            <Avatar>S</Avatar>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
