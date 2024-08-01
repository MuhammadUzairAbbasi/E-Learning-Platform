import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IconButton, Avatar, Menu, MenuItem, Badge, Fade } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import logo from "../../assets/Logo.jpg";
import axios from "axios";
import "./header.css";
import { baseServerUrl } from "../../constants";
import { UserContext } from "../../App";

const Header = () => {
  const { user, profileUpdated, setProfileUpdated } = useContext(UserContext);
  const [image, setImage] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [notifications, setNotifications] = useState([]);

  // Fetch user profile and notifications
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await axios.get(
          `${baseServerUrl}/api/users/profile/${user._id}`
        );
        setImage(userResponse.data.profilePicture);
        setProfileUpdated(false); // Reset profileUpdated flag after fetching
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (user) {
      fetchUserData();
    }
  }, [user._id, profileUpdated, setProfileUpdated, user]);

  // Fetch notifications only if the user's role is Student
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(
          `${baseServerUrl}/api/notifications/getnotifications`
        );
        // Filter notifications where `read` is false
        setNotifications(
          response.data.filter((notification) => !notification.read)
        );
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    if (user && user.role === "Student") {
      fetchNotifications();
    }
  }, [user]); // Dependencies: runs when `user` changes

  const handleNotificationClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNotificationItemClick = async (id) => {
    try {
      await axios.put(`${baseServerUrl}/api/notifications/markasread/${id}`);
      // Update local state after marking notification as read
      setNotifications((prevNotifications) =>
        prevNotifications.filter((notification) => notification._id !== id)
      );
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="left__header">
          <img src={logo} alt="Logo" />
          <h5>Edu Hub</h5>
        </div>
        <div className="right__header">
          {user && user.role === "Student" && (
            <>
              <IconButton onClick={handleNotificationClick}>
                <Badge badgeContent={notifications.length} color="secondary">
                  <NotificationsActiveIcon />
                </Badge>
              </IconButton>
              <Menu
                id="notification-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                {notifications.length === 0 ? (
                  <MenuItem onClick={handleClose}>
                    No new notifications
                  </MenuItem>
                ) : (
                  notifications.map((notification) => (
                    <MenuItem
                      key={notification._id}
                      onClick={() =>
                        handleNotificationItemClick(notification._id)
                      }
                    >
                      {notification.message}
                    </MenuItem>
                  ))
                )}
              </Menu>
            </>
          )}
          <Link to="/profile">
            <Avatar src={image} alt={user.username} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
