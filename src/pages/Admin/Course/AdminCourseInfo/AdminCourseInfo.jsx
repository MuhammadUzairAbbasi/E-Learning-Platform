import React, { useState } from "react";
import AddLectureModal from "./AddLectureModal/AddLectureModal";
import LectureItem from "./CourseLectureItem/CourseLectureItem";
import styles from "./AdminCourseInfo.module.css";

const AdminCourseInfo = ({
  course,
  handleAddLecture,
  handleEditLecture,
  handleDeleteLecture,
}) => {
  const [showAddLectureModal, setShowAddLectureModal] = useState(false);
  const [openLectures, setOpenLectures] = useState([]);

  const toggleLecture = (lectureId) => {
    setOpenLectures((prev) =>
      prev.includes(lectureId)
        ? prev.filter((id) => id !== lectureId)
        : [...prev, lectureId]
    );
  };

  return (
    <div className="container mx-auto my-5 flex-1">
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold">{course.name}</h3>
        <p>{course.date}</p>
      </div>
      <div className="flex justify-center">
        <img src={course.img} alt={course.title} className="my-4 w-5/6" />
      </div>

      <div className="lectures-section">
        <h4 className="text-xl font-semibold mb-3">Lectures</h4>
        <button
          className="p-2 rounded bg-blue-500 text-white mb-4"
          onClick={() => setShowAddLectureModal(true)}
        >
          Add Lecture
        </button>
        {course.lectures && course.lectures.length > 0 ? (
          course.lectures.map((lecture) => (
            <LectureItem
              key={lecture.id}
              lecture={{
                ...lecture,
                isOpen: openLectures.includes(lecture.id),
              }}
              toggleLecture={toggleLecture}
              handleEditLecture={handleEditLecture}
              handleDeleteLecture={handleDeleteLecture}
            />
          ))
        ) : (
          <p>No lectures available for this course.</p>
        )}
      </div>

      <AddLectureModal
        open={showAddLectureModal}
        handleClose={() => setShowAddLectureModal(false)}
        handleAddLecture={handleAddLecture}
        courseId={course.id} // Pass the course ID for context
      />
    </div>
  );
};

export default AdminCourseInfo;
