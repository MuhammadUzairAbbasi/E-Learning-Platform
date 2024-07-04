import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IconButton, Avatar } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ChatIcon from "@mui/icons-material/Chat";
import SettingsIcon from "@mui/icons-material/Settings";
import { Button } from "@mui/material";
import logo from "../../assets/Logo.jpg";

import "./header.css";

const Header = () => {
  const user = { role: "Teacher" };
  console.log(user.role);
  const [toggle, setToggle] = useState(false);
  const toggleClose = () => {
    setToggle(false);
  };

  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="left__header">
          <img src={logo} alt="Logo" />
          <h5>𝐄𝐝𝐮 𝐇𝐮𝐛</h5>
        </div>
        <div className="right__header">
          {user && user.role ? (
            <>
              <IconButton>
                <NotificationsActiveIcon />
              </IconButton>
              <IconButton>
                <SettingsIcon />
              </IconButton>
              <Link to="/profile">
                <Avatar>S</Avatar>
              </Link>
            </>
          ) : (
            <div className="right__header">
              <Button className="login-button">
                <NavLink to="/Login">Login</NavLink>
              </Button>
              <Button className="regster-button">
                <NavLink to="/Register">Register</NavLink>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
