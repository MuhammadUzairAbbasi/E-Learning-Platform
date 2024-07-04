import React from "react";
import { ErrorOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <ErrorOutline style={{ fontSize: 100 }} className="my-4" />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Oops! The page you are looking for might have been removed, renamed, or did not exist.
      </p>
      <Link to='/'>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go back to Home
      </button>
      </Link>
      
    </div>
  );
};

export default NotFoundPage;
