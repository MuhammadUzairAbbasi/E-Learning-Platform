import React from "react";

const CommonHeader = ({ title }) => {
  return (
    <div>
      <div style={{ backgroundColor: "#373B4D",color:"white", padding: "50px 10px" }}>
        <h4 className="text-center font-bold text-3xl py-5">{title}</h4>
      </div>
    </div>
  );
};

export default CommonHeader;
