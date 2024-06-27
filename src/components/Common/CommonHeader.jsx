import React from "react";

const CommonHeader = ({ title }) => {
  return (
    <div>
      <div style={{ backgroundColor: "#373B4D", padding: "50px 10px" }}>
        <h4 className="text-lime-50 text-center py-5">{title}</h4>
      </div>
    </div>
  );
};

export default CommonHeader;
