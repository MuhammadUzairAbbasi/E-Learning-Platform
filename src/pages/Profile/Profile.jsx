import React from 'react'
import { Avatar } from '@mui/material'
import CommonHeader from '../../components/Common/CommonHeader'
import './Profile.css'

const Profile = () => {
  const user={
    userName:"Uzair",
    email:"abbasiuzr@gmail.com"
  }
  return (
    <div>
      <CommonHeader title={user && user.userName }/>
      <div className="avatar">
        <Avatar className='avatar__profile__pic'/>
      </div>
      
    </div>
  )
}

export default Profile