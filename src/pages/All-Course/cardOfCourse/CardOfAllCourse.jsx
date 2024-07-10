import React from "react";
import { useNavigate } from "react-router-dom";
import './cards.css'; // Import the CSS file

const CardOfAllCourse = ({ courses }) => {
  const navigate = useNavigate();

  return (
    <div className="course-container">
      <div className="course-grid">
        {courses.map((course, index) => (
          <div
            key={index}
            className="course-card"
          >
            <img
              src={course.thumbnail}
              alt={course.name}
              className="course-image"
            />
            <div className="course-content">
              <h2 className="course-title">{course.name}</h2>
              <p className="course-description">{course.description}</p>
              <div className="course-details">
                <p className="course-lectures">
                  Lectures: {course.lectures.length}
                </p>
                <button
                  
                  className="course-button"
                >
                  Enroll
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardOfAllCourse;
