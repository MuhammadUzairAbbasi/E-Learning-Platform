import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IconButton, Avatar } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SettingsIcon from "@mui/icons-material/Settings";
import { Button } from "@mui/material";
import logo from "../../assets/Logo.jpg";

import "./header.css";

const Header = () => {
  const user = { role: "Student" };
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
          <h5>Edu Hub</h5>
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
            <div className="auth-buttons">
              <Button className="login-button">
                <NavLink to="/Login">Login</NavLink>
              </Button>
              <Button className="register-button">
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
