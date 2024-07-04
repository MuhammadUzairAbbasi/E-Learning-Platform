import React, { useState } from "react";
import { Container} from "@mui/material";
import { Link } from "react-router-dom";
import AdminSidebar from './AdminSidebar/AdminSidebar'

import "./admindashboard.css";

const AdminDashboard = () => {

  const [isSidebarExpanded, setSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-wrapper">
        <AdminSidebar
          isSidebarExpanded={isSidebarExpanded}
          toggleSidebar={toggleSidebar}
        />
        <div className="main__body__dashboard">
          <Container>
            <div className="dashboard__header__name">
              <h2 className="dashboard__name text-2xl font-semibold ml-3">
                Admin
              </h2>
              <Link to="/admindashboard">
                <div className="dashboard_link mr-3">
                  <h3>Dashboard</h3>
                </div>
              </Link>
            </div>
            </Container>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
