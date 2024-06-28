import React from 'react'
import { Avatar } from '@mui/material'
import CommonHeader from '../../components/Common/CommonHeader'
import './Profile.css'

const Profile = () => {
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
        <div >
          <h5>Your Profile Information</h5>
          <div className='profile_option'></div>
        </div>
        <div>
          <h5>Profile</h5>
          <div className="profile_info">
            </div>
        </div>

      </div>

    </div>
  )
}

export default Profile