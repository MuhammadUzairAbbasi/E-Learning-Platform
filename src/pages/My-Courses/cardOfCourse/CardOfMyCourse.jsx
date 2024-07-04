import React from "react";
import { useNavigate } from "react-router-dom";

const CardOfMyCourse = ({ courses }) => {
  const navigate = useNavigate();
  console.log("Card of Course", courses);

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={course.thumbnail}
              alt={course.name}
              className="h-36 w-full object-cover"
            />
            <div className="flex flex-col flex-grow p-4">
              <h2 className="text-lg font-semibold mb-2">{course.name}</h2>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="mt-auto">
                <p className="text-gray-600 mb-2">
                  Lectures: {course.lectures.length}
                </p>
                <button
                  onClick={() => {
                    navigate(`/course-info/${course.title}`, {
                      state: {
                        title: course.title,
                        name: course.name,
                        img: course.img, // Assuming course.img is defined in your data
                        date: course.date, // Assuming course.date is defined in your data
                        lectures: course.lectures, // Assuming course.lectures is defined in your data
                      },
                    });
                  }}
                  className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                >
                  Go to Course
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardOfMyCourse;
