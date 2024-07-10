import React from "react";
import { useNavigate } from "react-router-dom";
import "./CardOfMyCourse.css"; // Import the CSS file for styling

const CardOfMyCourse = ({ course }) => {
  const navigate = useNavigate();

  const handleGoToCourse = () => {
    navigate(`/course-info/${course.title}`, {
      state: {
        title: course.title,
        name: course.name,
        img: course.thumbnail,
        date: course.date,
        lectures: course.lectures,
      },
    });
  };

  return (
    <div className="course-card">
      <img src={course.thumbnail} alt={course.name} className="course-image" />
      <div className="course-content">
        <h2 className="course-title">{course.name}</h2>
        <p className="course-description">{course.description}</p>
        <div className="course-details">
          <p className="course-lectures">Lectures: {course.lectures.length}</p>
          <button className="course-button" onClick={handleGoToCourse}>
            Go to Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardOfMyCourse;
