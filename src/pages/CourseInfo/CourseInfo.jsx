import React, { useContext, useEffect, useState } from "react";
import LectureItem from "./LectureItem/LectureItem";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseServerUrl } from "../../constants";
import styles from "./courseinfo.module.css";
import StudentSidebar from "../StudentSidebar/StudentSidebar";
import { UserContext } from "../../App";

const CourseInfo = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [courseLectures, setCourseLectures] = useState([]);
  const [openLectures, setOpenLectures] = useState([]);
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);
  const {user}=useContext(UserContext);

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await axios.get(
          `${baseServerUrl}/api/courses/${courseId}`
        );
        setCourse(response.data);
        setCourseLectures(response.data.lectures || []);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };

    fetchCourseData();
  }, [courseId]);

  const toggleLecture = (id) => {
    setOpenLectures((prevOpenLectures) =>
      prevOpenLectures.includes(id)
        ? prevOpenLectures.filter((lectureId) => lectureId !== id)
        : [...prevOpenLectures, id]
    );
  };

const markAsCompleted = async (lectureId) => {
  // Toggle completion status
  const updatedLectures = courseLectures.map((lecture) =>
    lecture._id === lectureId
      ? { ...lecture, completed: !lecture.completed }
      : lecture
  );
  setCourseLectures(updatedLectures);

  try {
    // Calculate progress
    const completedLectures = updatedLectures.filter(
      (lecture) => lecture.completed
    ).length;
    const totalLectures = updatedLectures.length;
    const progressPercentage = (completedLectures / totalLectures) * 100;

    // Update progress in the course enrollment
    await axios.put(
      `${baseServerUrl}/api/enroll/updateprogress/${user._id}/${courseId}`,
      {
        progress: progressPercentage,
      }
    );
  } catch (error) {
    console.error("Error updating course progress:", error);
  }
};

  return (
    <div className={styles.flexContainer}>
      <StudentSidebar
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
      <div className={styles.mainContent}>
        <div className={styles.courseHeader}>
          <div className="flex items-center">
            <img
              src={course ? course.thumbnail : ""}
              alt={course ? course.name : "Loading..."}
              className="w-32 h-32 mr-4"
            />
            <h3 className={styles.courseName}>
              {course ? course.name : "Loading..."}
            </h3>
          </div>
        </div>

        <div className={styles.flex1}>
          <div className={styles.container}>
            <div className={styles.lecturesSection}>
              <h4 className="text-3xl font-bold mb-2">Lectures</h4>
              {courseLectures.length > 0 ? (
                courseLectures.map((lecture) => (
                  <LectureItem
                    key={lecture._id} // Ensure unique key
                    lecture={{
                      ...lecture,
                      isOpen: openLectures.includes(lecture._id),
                    }}
                    toggleLecture={toggleLecture}
                    markAsCompleted={markAsCompleted}
                  />
                ))
              ) : (
                <p>No lectures available for this course.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
