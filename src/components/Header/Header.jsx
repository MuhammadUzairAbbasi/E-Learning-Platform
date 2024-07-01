import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {IconButton,Avatar} from "@mui/material"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ChatIcon from "@mui/icons-material/Chat";
import SettingsIcon from "@mui/icons-material/Settings";
import { Button } from "@mui/material";

import './header.css'

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
            <img src="src\assets\Logo.jpg" alt="Logo" />
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
              <Button  className="regster-button">
                <NavLink to="/Register">Register</NavLink>
              </Button>
            </div>
          )}

          </div>

      
      {/* <div className="lower-header">
        {user && (
          <ul>
            {user.role === "Teacher" && (
              <>
                {" "}
                <li>
                    to="/teacher-dashboard"
                  <NavLink onClick={toggleClose} >
                    Dashboard
                  </NavLink>
                </li>
              </>
            )}
            {user.role === "Admin" && (
              <>
                {" "}
                <li>
                    
                  <NavLink onClick={toggleClose} to="/admin-dashboard">
                    Dashboard
                  </NavLink>
                </li>
                <li className="admin__toggle__menu">
                    
                  <NavLink onClick={toggleClose} to="/admin/course-info">
                    Course-Info
                  </NavLink>
                </li>
                <li className="admin__toggle__menu">
                    
                  <NavLink onClick={toggleClose} to="/admin/student-info">
                    Student-Info
                  </NavLink>
                </li>
                <li className="admin__toggle__menu">
                    
                  <NavLink onClick={toggleClose} to="/admin/teacher-info">
                    Teacher-Info
                  </NavLink>
                </li>
              </>
            )}
            {user.role === "Student" && (
              <>
                <li>
                  <NavLink onClick={toggleClose} to="/">
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={toggleClose} to="/library">
                    My Courses
                  </NavLink>
                </li>{" "}
              </>
            )}
            {user.role != null && (
               <>
            <li>
              <NavLink onClick={toggleClose} to="/all-courses">
                All Courses
              </NavLink>
            </li>
            </>
            )
            }
          </ul>
        )}
      </div> */}

      

      
      </div>
    </div>
  );
};

export default Header;
