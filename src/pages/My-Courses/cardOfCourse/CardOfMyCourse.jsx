import React from "react";
import { useNavigate } from "react-router-dom";
import './CardOfMyCourse.css'; // Import the CSS file

const CardOfMyCourse = ({ courses }) => {
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
                  onClick={() => {
                    navigate(`/course-info/${course.title}`, {
                      state: {
                        title: course.title,
                        name: course.name,
                        img: course.img,
                        date: course.date,
                        lectures: course.lectures,
                      },
                    });
                  }}
                  className="course-button"
                >
                  Go to Course
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardOfMyCourse;
