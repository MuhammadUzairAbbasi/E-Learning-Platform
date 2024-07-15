// AdminCourses.js
import React, { useState } from 'react';
import { Button } from '@mui/material';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import AddCourseModal from './AddCourseModal/AddCourseModal';
import ViewCourseModal from './ViewCourseModal/ViewCourseModal';
import view_icon from './images/view-icon.svg';
import add_icon from './images/add-icon.svg';
import './AdminCourses.css'

const AdminCourses = () => {
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showView, setShowView] = useState(false);
  const [courses, setCourses] = useState([]);

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };

  const handleShowAdd = () => setShowAdd(true);
  const handleCloseAdd = () => setShowAdd(false);
  
  const handleShowView = () => setShowView(true);
  const handleCloseView = () => setShowView(false);

  const handleEditCourse = (courseId) => {
    console.log(`Edit course with ID: ${courseId}`);
    // Implement your edit logic here
  };

  const handleDeleteCourse = (courseId) => {
    setCourses(courses.filter(course => course.id !== courseId));
    console.log(`Deleted course with ID: ${courseId}`);
  };

  const addCourse = (newCourse) => {
    setCourses((prevCourses) => [...prevCourses, newCourse]);
    handleCloseAdd();
  };

  return (
    <div className="admin-courses">
      <AdminSidebar
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
      <div className="main-content">
        <section className="course-info">
          <div className="container course-info-container">
            <div className="heading_container">
              <h1 className="course-info-heading">Course Info</h1>
            </div>
            <div className="cards-wrapper-flex">
              <div className="card" onClick={handleShowAdd}>
                <img src={add_icon} alt="Add Course" className="card-image" />
                <Button className="btn btn-add">Add Course</Button>
              </div>
              <div className="card" onClick={handleShowView}>
                <img src={view_icon} alt="View Course" className="card-image" />
                <Button className="btn btn-add">View Courses</Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <AddCourseModal open={showAdd} handleClose={handleCloseAdd} addCourse={addCourse} />
      <ViewCourseModal
        open={showView}
        handleClose={handleCloseView}
        courses={courses}
        handleEditCourse={handleEditCourse}
        handleDeleteCourse={handleDeleteCourse}
      />
    </div>
  );
};

export default AdminCourses;
