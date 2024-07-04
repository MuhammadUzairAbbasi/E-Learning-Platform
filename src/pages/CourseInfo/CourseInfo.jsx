import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CommonHeader from '../../components/Common/CommonHeader';
import LectureItem from './LectureItem/LectureItem';

const CourseInfo = () => {
  const location = useLocation();
  const { title, name, img, date, lectures } = location.state || {};
  const [openLectures, setOpenLectures] = useState([]);

  // Optional: Handle case when location.state is null or undefined
  if (!title || !name || !img || !date || !lectures) {
    // Handle the case where required data is missing or undefined/null
    return <div>Loading...</div>; // or any appropriate loading or error handling
  }

  console.log("Course Info", title, name, img, date, lectures);

  const toggleLecture = (id) => {
    setOpenLectures((prev) =>
      prev.includes(id) ? prev.filter((lectureId) => lectureId !== id) : [...prev, id]
    );
  };

  return (
    <div>
      <CommonHeader title={title} />
      <div className="container mx-auto my-5 flex-1">
        <div className='flex justify-between'>
          <h3 className="text-2xl font-bold">{name}</h3>
          <p>{date}</p>
        </div>
        <div className='flex justify-center'>
          <img src={img} alt={title} className="my-4 w-5/6" />
        </div>
        
        <div className="lectures-section">
          <h4 className="text-xl font-semibold mb-3">Lectures</h4>
          {lectures && lectures.length > 0 ? (
            lectures.map((lecture, index) => (
              <LectureItem
                key={index}
                lecture={{ ...lecture, isOpen: openLectures.includes(lecture.id) }}
                toggleLecture={toggleLecture}
              />
            ))
          ) : (
            <p>No lectures available for this course.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
