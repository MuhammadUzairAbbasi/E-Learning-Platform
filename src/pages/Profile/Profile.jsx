import React from 'react'
import { Avatar } from '@mui/material'
import { Link } from 'react-router-dom'
import CommonHeader from '../../components/Common/CommonHeader'
import TransitionHooks from './TransitionHook/TransitionHook'
import './Profile.css'

const Profile = ({ }) => {
  const user = {
    userName: "Uzair",
    email: "abbasiuzr@gmail.com"
  }
  return (
    <div>
      <CommonHeader title={user && user.userName} />
      <div className="avatar">
        <Avatar className='avatar__profile__pic' />
      </div>

      <div className='Profile_Informaton'>
        <div className="Profile-wrapper">

          <div className='profile-edit'>
            <h5>Profile Edit Options</h5>
            <div className='profile_option'>
              <TransitionHooks title="User Details"
                content={<div>
                  <ul className='Option_list'>
                    <li><Link to="/ProfileEdit"> Edit Profile</Link></li>
                    <li><Link to="/Editemail"> Edit Email</Link></li>
                  </ul>
                </div>} />
              <TransitionHooks title="Course Details"
                content={<div>
                  <ul className='Option_list'>
                    <li><Link to="/My-Courses"> Check Courses</Link></li>
                  </ul>
                </div>} />
            </div>
          </div>
          
          <div className='profile-details'>
            <h5>Profile Information</h5>
            <div className="profile_info">
              <h6>Username : </h6>
              <h6>Email : </h6>
              <h6>Preferred Language : </h6>
              <h6>Courses Enroll : </h6>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Profile