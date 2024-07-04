// CourseCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import './CourseCard.css';

const CourseCard = ({ title, name, id, img, date, lectures }) => {
  const navigate = useNavigate();
  console.log("Course card",title, name, id, img, date, lectures);

  const handleClick = () => {
    navigate(`/course-info/${title}`, { state: { title, name, img, date, lectures } });
  };

  return (
    <div className="course__Card" onClick={handleClick}>
      <div className="container">
        <img className="image" src={img} alt={title} />
        <div className="overlay">
          <p className="text">View</p>
        </div>
      </div>
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
