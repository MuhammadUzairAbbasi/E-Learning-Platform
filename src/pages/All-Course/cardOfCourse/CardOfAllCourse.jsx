import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "./cards.css";
import { UserContext } from "../../../App.jsx";

const CardOfAllCourse = ({ course }) => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const handleEnrollClick = () => {
    if (!user) {
      // Redirect to login if user is not logged in
      navigate("/login");
      return;
    }

    navigate("/checkout", {
      state: { userId: user._id, courseId: course._id },
    });
  };

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
          <p className="allcourses-course-price mb-2">Price: ${course.price}</p>
          <Button
            className="allcourses-course-button"
            onClick={handleEnrollClick}
            variant="contained"
            color="primary"
          >
            Enroll
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardOfAllCourse;
