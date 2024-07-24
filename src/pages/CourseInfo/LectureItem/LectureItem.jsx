import React from "react";
import ReactPlayer from "react-player";
import { MdCheckCircle, MdRadioButtonUnchecked } from "react-icons/md";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const LectureItem = ({ lecture, toggleLecture, markAsCompleted }) => {
  console.log(lecture);
  return (
    <div className="lecture-item mb-4 bg-white rounded-lg shadow-lg p-4 w-full">
      <div className="flex justify-between items-center">
        <div
          className="lecture-title cursor-pointer text-2xl font-bold text-gray-800"
          onClick={() => toggleLecture(lecture._id)}
          style={{ textTransform: "uppercase" }}
        >
          {lecture.title}
        </div>
        <div className="flex items-center">
          <button
            className="p-2 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center mr-2"
            onClick={() => toggleLecture(lecture._id)}
          >
            {lecture.isOpen ? (
              <FaCaretUp className="w-4 h-4" />
            ) : (
              <FaCaretDown className="w-4 h-4" />
            )}
          </button>
          <button
            className={`p-2 rounded-full flex items-center justify-center ml-2 ${
              lecture.completed
                ? "bg-green-500 text-white border border-green-700"
                : "bg-gray-300 text-gray-700 border border-gray-500"
            }`}
            onClick={() => markAsCompleted(lecture._id)}
            title={
              lecture.completed ? "Mark as Incomplete" : "Mark as Completed"
            }
          >
            {lecture.completed ? (
              <MdCheckCircle className="w-5 h-5" />
            ) : (
              <MdRadioButtonUnchecked className="w-5 h-5" />
            )}
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
            <p className="mt-2 text-xl">{lecture.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LectureItem;
