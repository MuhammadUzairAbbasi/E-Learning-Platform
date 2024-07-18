import React from "react";
import { IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import styles from "./CourseLectureItem.module.css";

const CourseLectureItem = ({
  lecture,
  toggleLecture,
  handleEditLecture,
  handleDeleteLecture,
}) => {
  return (
    <div className="lecture-item mb-4 bg-green-100 rounded-lg p-4">
      <div className="flex justify-between items-center">
        <div
          className="lecture-title cursor-pointer text-xl font-semibold"
          onClick={() => toggleLecture(lecture.id)}
        >
          {lecture.title}
        </div>
        <div>
          <IconButton onClick={() => handleEditLecture(lecture)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => handleDeleteLecture(lecture.id)}>
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        </div>
      </div>
      {lecture.isOpen && (
        <div className="lecture-details mt-2 pl-4">
          <p>{lecture.description}</p>
          {lecture.pdf && (
            <a
              href={lecture.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Download PDF
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default CourseLectureItem;
