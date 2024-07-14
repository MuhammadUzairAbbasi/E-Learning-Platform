// import React from "react";
// import { Link } from "react-router-dom";
// import "./Sidebar.css";

// const Sidebar = ({ title, link, Icon,isSidebarExpanded }) => {
//   return (
//     <div className="sidebar__dashboard__row">
//         <div className="sidebar-wrapper">
//           <Link to={link} className="sidebar_data">
//             {Icon && <Icon style={{fontSize:30}}/>}
//             {isSidebarExpanded &&<span>{title}</span>}
//           </Link>
//         </div>
//     </div>
   
//   );
// };
import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = ({ Icon, title, link, isSidebarExpanded, onClick }) => (
  <ListItem button component={Link} to={link} onClick={onClick}>
    <ListItemIcon>
      <Icon />
    </ListItemIcon>
    {isSidebarExpanded && <ListItemText primary={title} />}
  </ListItem>
);

export default Sidebar;

