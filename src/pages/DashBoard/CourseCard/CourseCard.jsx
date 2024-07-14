import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LinearProgress } from '@mui/material';
import './CourseCard.css';

const CourseCard = ({ title, name, id, img, date, lectures, progress }) => {
  const navigate = useNavigate();

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
        <span className="date">{date}</span>
        <h5 className="title">{title}</h5>
        <h5 className="name">{name}</h5>
        
        <span className="progress-text">{progress}% complete</span>
      </div>
    </div>
  );
};

export default CourseCard;
