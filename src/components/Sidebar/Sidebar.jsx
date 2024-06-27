import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "./Sidebar.css";

const Sidebar = ({ title, link, Icon, admin }) => {
  return (
    <div className="sidebar__dashboard__row">
        <Link to={link} className="sidebar_data">
          {Icon && <Icon />}
          <span>{title}</span>
        </Link>
    </div>
    // {title === "Logout" ? (
    //     <div className="sidebar_logout ">
    //       <Icon style={{ color: "gray", marginRight: "10px" }} />
    //       <Button
    //         style={{ color: "gray" }}
    //         onClick={() => {
    //           history.push("/Login");
    //         }}
    //       >
    //         <span> {title}</span>
    //       </Button>
    //     </div>
    //   ) :
  );
};

export default Sidebar;
