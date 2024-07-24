import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { IconButton, Avatar } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import logo from "../../assets/Logo.jpg";

import "./header.css";
import { UserContext } from "../../App";

const Header = () => {
  const {user}=useContext(UserContext);
  
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
          <Link to="/profile">
            <Avatar src={user.profilePicture} alt={user.username} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
