import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import "./Body4Card.css";

const Body4Card = ({ title, Icon, link }) => {
  return (
    <Link to={`${link}`} className="body4__card">
      
      <IconButton className="icon__style">
        <Icon fontSize="large" className="icon__style__b4card" />
      </IconButton>

      <div className="card-title">
        <h6>{title}</h6>
      </div>

      
    </Link>
  );
};

export default Body4Card;
