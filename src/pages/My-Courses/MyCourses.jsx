import { Container, Typography } from '@mui/material';
import React from 'react';
import CardOfMyCourse from './cardOfCourse/CardOfMyCourse';
import CourseData from "../DashBoard/FakeData/CourseData";

const MyCourses = () => {
    console.log("My Courses", CourseData);
    return (
        <Container>
            <Typography className='text-center my-3 border-bottom' variant='h3' color="primary">
                My Courses
            </Typography>
            {CourseData.map((course,index)=>{

            })}
            <CardOfMyCourse courses={CourseData} />
        </Container>
    )
}

export default MyCourses;
