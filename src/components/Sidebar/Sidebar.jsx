import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ title, link, Icon,isSidebarExpanded }) => {
  return (
    <div className="sidebar__dashboard__row">
        <div className="sidebar-wrapper">
          <Link to={link} className="sidebar_data">
            {Icon && <Icon style={{fontSize:30}}/>}
            {isSidebarExpanded &&<span>{title}</span>}
          </Link>
        </div>
    </div>
   
  );
};

export default Sidebar;
