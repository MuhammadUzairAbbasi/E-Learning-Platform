import React from 'react';

const StudentTable = ({ student }) => {
  console.log(student);

  return (
    <div className="container mx-auto my-5 overflow-x-auto">
      <h3 className="text-2xl text-center font-bold mb-4">Student List</h3>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200">Id</th>
            <th className="py-2 px-4 border-b border-gray-200">Name</th>
            <th className="py-2 px-4 border-b border-gray-200">Email</th>
            <th className="py-2 px-4 border-b border-gray-200">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr key={student.id}>
            <td className="py-2 px-4 border-b border-gray-200">{student.id}</td>
            <td className="py-2 px-4 border-b border-gray-200">{student.name}</td>
            <td className="py-2 px-4 border-b border-gray-200">{student.email}</td>
            <td className="py-2 px-4 border-b border-gray-200">
              <button
                className="text-blue-500 hover:text-blue-700"
              >
                View Info
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
