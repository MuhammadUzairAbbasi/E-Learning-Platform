import React, { useEffect, useState } from "react";
import LectureItem from "./LectureItem/LectureItem";
import UploadLectureModal from "./UploadLectureModal/UploadLectureModal";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseServerUrl } from "../../../../constants";
import { Button } from "@mui/material";
import { AiOutlinePlus } from "react-icons/ai";
import styles from "./CoursePage.module.css"; // Import the CSS module
import AdminSidebar from "../../AdminSidebar/AdminSidebar";

const CoursePage = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [courseLectures, setCourseLectures] = useState([]);
  const [openLectures, setOpenLectures] = useState([]);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);

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

  const addLecture = (lecture) => {
    setCourseLectures((prevLectures) => [...prevLectures, lecture]);
  };

  const handleUploadClick = () => {
    setShowUploadForm(true);
  };

  const handleCloseUpload = () => {
    setShowUploadForm(false);
  };

  const handleDeleteLecture = async (lectureId) => {
    try {
      await axios.delete(
        `${baseServerUrl}/api/courses/${courseId}/deletelecture/${lectureId}`
      );
      setCourseLectures((prevLectures) =>
        prevLectures.filter((lecture) => lecture._id !== lectureId)
      );
    } catch (error) {
      console.error("Error deleting lecture:", error);
    }
  };

  return (
    <div className={styles.flexContainer}>
      <AdminSidebar
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

        <div className="flex flex-row justify-end m-3 font-extrabold">
          <Button variant="contained" size="large" className={styles.uploadButton} onClick={handleUploadClick}>
            <AiOutlinePlus className="mr-3 text-large" />
            Upload Lecture
          </Button>
        </div>

        <div className={styles.flex1}>
          <div className={styles.container}>
            <div className={styles.lecturesSection}>
              <h4 className="text-3xl font-bold mb-2">Lectures</h4>
              {courseLectures.length > 0 ? (
                courseLectures.map((lecture, index) => (
                  <LectureItem
                    key={index}
                    lecture={{
                      ...lecture,
                      isOpen: openLectures.includes(lecture._id), // Changed to _id for consistency
                    }}
                    toggleLecture={toggleLecture}
                    onDelete={handleDeleteLecture} // Pass delete handler
                  />
                ))
              ) : (
                <p>No lectures available for this course.</p>
              )}
            </div>
          </div>
        </div>

        <UploadLectureModal
          open={showUploadForm}
          handleClose={handleCloseUpload}
          courseId={courseId}
          addLecture={addLecture}
        />
      </div>
    </div>
  );
};

export default CoursePage;
