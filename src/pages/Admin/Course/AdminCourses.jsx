import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AdminCourses.css";
import view_icon from "./images/view-icon.svg";
import add_icon from "./images/add-icon.svg";
import AdminSidebar from "../AdminDashboard/AdminSidebar/AdminSidebar"; // Adjust the path as necessary

const AdminCourses = () => {
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
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
              <h1 className="course-info-heading ">
                Course Info
              </h1>
            </div>
            <div className="cards-wrapper-flex">
              <Link to="">
                <div className="card">
                  <img src={add_icon} alt="Add Course" className="card-image" />
                  <button className="btn btn-add">Add Course</button>
                </div>
              </Link>
              <Link to="">
                <div className="card">
                  <img
                    src={view_icon}
                    alt="View Course"
                    className="card-image"
                  />
                  <button className="btn btn-add">Add Course</button>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminCourses;
