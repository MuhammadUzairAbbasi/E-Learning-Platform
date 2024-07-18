import React from "react";

const LectureItem = ({ lecture, toggleLecture, onDelete }) => {
  return (
    <div className="lecture-item mb-4 bg-white rounded-lg shadow-lg p-4">
      <div className="flex justify-between items-center">
        <div
          className="lecture-title cursor-pointer text-xl font-semibold text-gray-800"
          onClick={() => toggleLecture(lecture._id)}
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
          <p className="text-gray-600 mb-4">{lecture.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lecture.video && (
              <div className="video-player">
                <h4 className="text-lg font-semibold mb-2">Video Lecture</h4>
                <video width="100%" controls>
                  <source src={lecture.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            {lecture.pdf && (
              <div className="pdf-viewer">
                <h4 className="text-lg font-semibold mb-2">PDF Lecture</h4>
                <a href={lecture.pdf} target="_blank">
                  Open PDF
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LectureItem;
