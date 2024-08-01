import React, { useContext, useEffect, useState } from "react";
import LectureItem from "./LectureItem/LectureItem";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseServerUrl } from "../../constants";
import styles from "./courseinfo.module.css";
import StudentSidebar from "../StudentSidebar/StudentSidebar";
import { UserContext } from "../../App";
import { toast } from "react-toastify";

const CourseInfo = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [courseLectures, setCourseLectures] = useState([]);
  const [openLectures, setOpenLectures] = useState([]);
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);
  const { user } = useContext(UserContext);

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
        console.log(response.data);
        setCourseLectures(response.data.lectures || []);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };

    fetchCourseData();
  }, [course]);

  const toggleLecture = (id) => {
    setOpenLectures((prevOpenLectures) =>
      prevOpenLectures.includes(id)
        ? prevOpenLectures.filter((lectureId) => lectureId !== id)
        : [...prevOpenLectures, id]
    );
  };

  const markAsCompleted = async (lectureId) => {
    const updatedLectures = courseLectures.map((lecture) =>
      lecture._id === lectureId
        ? { ...lecture, completed: !lecture.completed }
        : lecture
    );
    setCourseLectures(updatedLectures);

    try {
      const completedLectures = updatedLectures.filter(
        (lecture) => lecture.completed
      ).length;
      const totalLectures = updatedLectures.length;
      const progressPercentage = (completedLectures / totalLectures) * 100;

      await axios.put(
        `${baseServerUrl}/api/enroll/updateprogress/${user._id}/${courseId}`,
        { progress: progressPercentage }
      );
      toast.success("Course Progress Updated");
    } catch (error) {
      toast.error("Error Updating Course Progress");
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
          <div className={styles.courseHeaderContent}>
            <img
              src={course ? course.thumbnail : ""}
              alt={course ? course.name : "Loading..."}
              className={styles.courseThumbnail}
            />
            <div className="mt-5 ml-5">
              <h2 className={styles.courseName}>
                {course ? course.name : "Loading..."}
              </h2>
              <h4 className={styles.courseDescription}>
                {course ? course.description : "Loading..."}
              </h4>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-4xl font-bold m-2">Lectures</h4>
        </div>
        <div className={styles.flex1}>
          <div className={styles.container}>
            <div className={styles.lecturesSection}>
              {courseLectures.length > 0 ? (
                courseLectures.map((lecture) => (
                  <LectureItem
                    key={lecture._id}
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
