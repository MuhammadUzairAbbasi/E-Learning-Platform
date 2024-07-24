import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CardOfMyCourse.module.css"; // Import the CSS module

const CardOfMyCourse = ({ course }) => {
  const navigate = useNavigate();
  const { progress, status, enrollmentDate } = course;
  const { _id, name, description, thumbnail } = course.course[0]; // Access the first item in the course array
  console.log(_id);
  return (
    <div className={styles.courseCard}>
      <img src={thumbnail} alt={name} className={styles.courseImage} />
      <div className={styles.courseContent}>
        <h2 className={styles.courseTitle}>{name}</h2>
        <p className={styles.courseDescription}>{description}</p>
        <div className={styles.courseDetails}>
          <p className={styles.courseLectures}>
            Lectures: {progress}% completed
          </p>
          <p className={styles.courseStatus}>Status: {status}</p>
          <p className={styles.courseEnrollmentDate}>
            Enrolled on: {new Date(enrollmentDate).toLocaleDateString()}
          </p>
          <button
            className={styles.courseButton}
            onClick={() => navigate(`/courseinfo/${_id}`)}
          >
            Go to Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardOfMyCourse;
