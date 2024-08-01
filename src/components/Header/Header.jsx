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
  const { user } = useContext(UserContext);
  const [image, setImage] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${baseServerUrl}/api/users/profile/${user._id}`
        );
        setImage(response.data.profilePicture);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUser();
  }, [image]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(
          `${baseServerUrl}/api/notifications/getnotifications`
        );
        setNotifications(
          response.data.filter((notification) => !notification.read)
        );
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };
    fetchNotifications();
  }, []);

  const handleNotificationClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNotificationItemClick = async (id) => {
    try {
      await axios.put(`${baseServerUrl}/api/notifications/markasread/${id}`);
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
                  notifications.map((notification, index) => (
                    <MenuItem
                      key={index}
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
