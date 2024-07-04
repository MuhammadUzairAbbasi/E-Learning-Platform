// LectureItem.js
import React from 'react';

const LectureItem = ({ lecture, toggleLecture }) => {
  return (
    <div className="lecture-item mb-4 bg-green-100 rounded-lg p-4">
      <div className="flex justify-between items-center">
        <div
          className="lecture-title cursor-pointer text-xl font-semibold"
          onClick={() => toggleLecture(lecture.id)}
        >
          {lecture.title}
        </div>
        <button
          className="p-2 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center"
          onClick={() => toggleLecture(lecture.id)}
        >
          {lecture.isOpen ? (
            <svg
              className="w-4 h-4 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          ) : (
            <svg
              className="w-4 h-4 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
            </svg>
          )}
        </button>
      </div>
      {lecture.isOpen && (
        <div className="lecture-details mt-2 pl-4">
          <p>{lecture.description}</p>
          <a
            href={lecture.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Download PDF
          </a>
        </div>
      )}
    </div>
  );
};

export default LectureItem;
