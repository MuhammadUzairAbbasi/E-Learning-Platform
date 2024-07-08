import React from 'react';
import StudentTable from './StudentTable/StudentTable';
import AdminSidebar from '../AdminDashboard/AdminSidebar/AdminSidebar';

const StudentInfo = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = React.useState(true);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const student = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com'
  };

  return (
    <div className="relative flex">
      <AdminSidebar
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
        className="absolute left-0 top-0 h-full"
      />
      <div style={{marginLeft:60}} className="w-full">
        <div className="container mx-auto my-5">
          <h3 className="text-2xl text-center font-bold mb-4">Student Information</h3>
          <div className="bg-white p-4 border border-gray-200">
            <StudentTable student={student} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;
