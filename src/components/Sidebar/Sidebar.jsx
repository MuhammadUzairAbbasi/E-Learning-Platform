import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from '@mui/material';
import './Sidebar.css'
import { blue } from '@mui/material/colors';

const Sidebar = ({ title, link, Icon ,admin }) => {
  return (
    <div className='sidebar__dashboard__row'>
        {title === "Logout" ? (
        <div className='sidebar_logout ' >
          <Icon style={{ color: "gray", marginRight:"10px"}} />
          <Button
          style={{ color: "gray"}}
            onClick={() => {
              history.push("/login");
            }}
          >
            <span> {title}</span> 
          </Button>
        </div>
      ) : (
        <Link to={link} className='sidebar_data'>
          {Icon && <Icon />}
          <span>{title}</span>
        </Link>
      )}
    </div>
  )
};

export default Sidebar