import React, { useContext,useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IconButton, Avatar } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import logo from "../../assets/Logo.jpg";
import axios from "axios";
import "./header.css";
import { baseServerUrl } from "../../constants";
import { UserContext } from "../../App";

const Header = () => {
  const {user}=useContext(UserContext);
  const [image, setImage] = useState("");
  const [userdata,setUserData]=useState("");

    useEffect(() => {
      // Fetch the initial user data here if needed
      const fetchUser = async () => {
        try {
          const response = await axios.get(
            `${baseServerUrl}/api/users/profile/${user._id}`
          );
          console.log(response.data);
          setUserData(response.data);
          setImage(response.data.profilePicture);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchUser();
    }, [userdata]);


  
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
            <Avatar src={image} alt={user.username} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
