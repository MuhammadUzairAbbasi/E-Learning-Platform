import React from "react";
import { useNavigate } from "react-router-dom";
import { LinearProgress } from "@mui/material";
import "./CourseCard.css";

const CourseCard = ({name,img,date,progress}) => {
  const navigate = useNavigate();

  console.log(name,img,date,progress);

  const handleClick = () => {
    navigate('/courseinfo/')
  };

  return (
    <div className="course__Card" onClick={handleClick}>
      <div className="container">
        <img className="image" src={img} alt="" />
        {/* <div className="overlay">
          <p className="text">View</p>
        </div> */}
      </div>
      <div className="course__content">
        <span className="date">{date}</span>
        
        <h5 className="name">{name}</h5>

        <span className="progress-text">{progress}% complete</span>
      </div>
    </div>
  );
};

export default CourseCard;
