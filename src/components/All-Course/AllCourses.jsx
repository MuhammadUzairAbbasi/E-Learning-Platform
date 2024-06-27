import { Container, Typography } from '@mui/material'
import React from 'react'
import CardOfAllCourse from './cardOfCourse/CardOfAllCourse'
const AllCourses = () => {
  return (
    <Container>
         <Typography className='text-center my-3 border-bottom' variant='h3' color="primary">
                All Courses
         </Typography>
         <CardOfAllCourse/>
    </Container>
  )
}

export default AllCourses