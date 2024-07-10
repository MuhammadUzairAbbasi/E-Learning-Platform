import React from 'react';
import StudentTable from './StudentTable/StudentTable';
import AdminSidebar from '../AdminDashboard/AdminSidebar/AdminSidebar';

const StudentInfo = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = React.useState(true);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const students = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    
  ];

  return (
    <div className="relative flex">
      <AdminSidebar
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
        className="sidebar"
      />
      <div className="main-content">
        <div className="container">
          <h3 className="heading">Student Information</h3>
          <div className="content-wrapper">
            <StudentTable students={students} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;
