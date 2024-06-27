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
  const user = { role: "Student" };
  console.log(user.role);
  const [toggle, setToggle] = useState(false);
  const toggleClose = () => {
    setToggle(false);
  };
  
  return (
    <div className="header">
      <div className="left__header">
        <Link>
          <img src="src\assets\Logo.jpg" alt="Logo" />
          <h4>EDU-HUB</h4>
        </Link>
      </div>
      <div
        className={`middle__header ${
          toggle ? `show__sidebar__nav` : `sidebar__nav`
        }`}
      >
        {user && (
          <ul>
            {user.role === "Teacher" && (
              <>
                {" "}
                <li>
                    {/* to="/teacher-dashboard" */}
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
                  <NavLink onClick={toggleClose} to="/ucam">
                    UCAM
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={toggleClose} to="/library">
                    LIBRARY
                  </NavLink>
                </li>{" "}
              </>
            )}
            {user.role != null && (
               <>
                <li>
              <NavLink onClick={toggleClose} to="/profile">
                Profile
              </NavLink>
            </li>
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
      </div>

      {user && user.role ? (
        <div className="right__header">
          <IconButton>
            <VisibilityOffIcon />
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <Link to="/profile">
            <Avatar>S</Avatar>
          </Link>
        </div>
      ) : (
        <div className="Login_Register_Button">
          <Button className="custom-button">
          <NavLink to="/Login">Login</NavLink>
        </Button>
          <Button  className="custom-button">
            <NavLink to="/Register">Register</NavLink>
          </Button>
        </div>
      )}

      
    </div>
  );
};

export default Header;
