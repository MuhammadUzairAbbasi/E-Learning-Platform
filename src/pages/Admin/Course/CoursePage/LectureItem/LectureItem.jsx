import React from "react";
import ReactPlayer from "react-player";

const LectureItem = ({ lecture, toggleLecture, onDelete }) => {
  return (
    <div className="lecture-item mb-4 bg-white rounded-lg shadow-lg p-4 w-full">
      <div className="flex justify-between items-center">
        <div
          className="lecture-title cursor-pointer text-2xl font-bold text-gray-800"
          onClick={() => toggleLecture(lecture._id)}
          style={{ textTransform: "uppercase" }} // Apply uppercase transformation here
        >
          {lecture.title}
        </div>
        <div className="flex items-center">
          <button
            className="p-2 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center mr-2"
            onClick={() => toggleLecture(lecture._id)}
          >
            {lecture.isOpen ? (
              <svg
                className="w-4 h-4 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 15l7-7 7 7"
                />
              </svg>
            )}
          </button>
          <button
            className="p-2 rounded-full bg-red-200 text-red-600 flex items-center justify-center"
            onClick={() => onDelete(lecture._id)}
          >
            <svg
              className="w-4 h-4 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      {lecture.isOpen && (
        <div className="lecture-details mt-4">
          <div className="flex justify-center">
            {lecture.videoLink && (
              <div
                className="video-player flex flex-col items-center"
                style={{ width: "100%" }}
              >
                <ReactPlayer url={lecture.videoLink} controls width="100%" />
              </div>
            )}
          </div>
          <div>
            <h4 className="text-2xl font-semibold mt-2">Description</h4>
            <p className=" mt-2 text-xl">{lecture.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LectureItem;
