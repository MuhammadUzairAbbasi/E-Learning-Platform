import React, { lazy } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "./CourseCard.css";

const CourseCard = ({title, name, id, img, date}) => {
  console.log("Course Card props",title, name, id, img, date);
  
  return (
    <div className="course__Card">
      <Link className="container" to="">
        <img className="image" src={img} alt="" />
        <div className="overlay">
          <p className="text">View</p>
        </div>
      </Link>
      <div className="course__content">
        <span>{date}</span>
        <h5>{name}</h5>
        <h5>{title}</h5>
        <Button color="primary" variant="contained">
          Published
        </Button>
        <br />
        <span>
          This is a course template which is to be used as the course kit for
          the teachers.
        </span>
      </div>
    </div>
  );
};

export default CourseCard;
