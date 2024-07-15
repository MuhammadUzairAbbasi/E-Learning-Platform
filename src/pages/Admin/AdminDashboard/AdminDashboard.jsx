import React, { useState } from "react";
import { Box,Typography,Container} from "@mui/material";
import { Link } from "react-router-dom";
import AdminSidebar from '../AdminSidebar/AdminSidebar'

import "./admindashboard.css";

const AdminDashboard = () => {

  const [isSidebarExpanded, setSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="admindashboard">
      <div className="admindashboard-wrapper">
        <AdminSidebar
          isSidebarExpanded={isSidebarExpanded}
          toggleSidebar={toggleSidebar}
        />
        <div className="main__body__dashboard">
          <Container>
            <Box className="dashboard-header">
            <Typography sx={{'fontWeight':600}} className="text-left heading" variant="h4" color="primary">
              Admin
            </Typography>
            <Typography className="text-right heading dashboard-link" variant="h4" color="primary">
              Dashboard
            </Typography>
            
          </Box>
            </Container>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
