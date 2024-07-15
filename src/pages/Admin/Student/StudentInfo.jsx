import React, { useState, useEffect } from "react";
import StudentTable from "./StudentTable/StudentTable";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import axios from "axios";
import { baseServerUrl } from "../../../constants";
import "./studentinfo.css";

const StudentInfo = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [students, setStudents] = useState([]);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${baseServerUrl}/api/users/users`);
        console.log(res.data);
        setStudents(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  

  return (
    <div className="Admin-student-page">
      <AdminSidebar
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
      <div className="main-content">
        <div className="container">
          <h3 className="heading text-center text-3xl font-bold">
            Student Information
          </h3>
          <StudentTable students={students} setStudents={setStudents} />
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;
