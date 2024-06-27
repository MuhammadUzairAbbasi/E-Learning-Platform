import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import "./Body4Card.css";

const Body4Card = ({ title, Icon, shortTitle, link }) => {
  return (
    <Link to={`${link}`} className="body4__card">
      <div className="">
        <span className="shortTitle">{shortTitle}</span>
        <h6>{title}</h6>
      </div>

      <IconButton className="icon__style">
        <Icon fontSize="large" className="icon__style__b4card" />
      </IconButton>
    </Link>
  );
};

export default Body4Card;
