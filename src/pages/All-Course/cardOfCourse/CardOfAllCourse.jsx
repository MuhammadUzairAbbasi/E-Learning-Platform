import React from "react";
import "./cards.css"; // Import the CSS file

const CardOfAllCourse = ({ course }) => {
  return (
    <div className="allcourses-course-card">
      <img
        src={course.thumbnail}
        alt={course.name}
        className="allcourses-course-image"
      />
      <div className="allcourses-course-content">
        <h2 className="allcourses-course-title">{course.name}</h2>
        <p className="allcourses-course-description">{course.description}</p>
        <div className="allcourses-course-details">
          <p className="allcourses-course-lectures">
            Lectures: {course.lectures.length}
          </p>
          <button className="allcourses-course-button">Enroll</button>
        </div>
      </div>
    </div>
  );
};

export default CardOfAllCourse;
