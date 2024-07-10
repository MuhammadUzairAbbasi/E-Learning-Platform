import { Container, Typography, Box } from '@mui/material';
import React, { useState } from 'react';
import CardOfAllCourse from './cardOfCourse/CardOfAllCourse';
import StudentSidebar from '../StudentSidebar/StudentSidebar';
import './allCourses.css';

const AllCourses = () => {
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };

  // Example data for courses (replace with your actual data)
  const courses = [
    {
        title: 'computer-science',
        name: 'Computer Science Fundamentals',
        thumbnail: '',
        description: 'Explore the foundational concepts of computer science.',
        lectures: [
            { title: 'Introduction to Algorithms', content: 'Basic concepts and complexity analysis.' },
            { title: 'Data Structures', content: 'Arrays, linked lists, stacks, and queues.' }
        ]
    },
    {
        title: 'web-development',
        name: 'Web Development Basics',
        thumbnail: '',
        description: 'Learn the fundamentals of web development.',
        lectures: [
            { title: 'HTML and CSS', content: 'Building blocks of web pages.' },
            { title: 'JavaScript Basics', content: 'Variables, functions, and DOM manipulation.' }
        ]
    },
    {
        title: 'python-programming',
        name: 'Python Programming for Beginners',
        thumbnail: '',
        description: 'Get started with Python programming language.',
        lectures: [
            { title: 'Python Syntax', content: 'Variables, data types, and control structures.' },
            { title: 'Functions and Modules', content: 'Defining functions and using modules.' }
        ]
    },
    {
        title: 'data-science',
        name: 'Introduction to Data Science',
        thumbnail: '',
        description: 'An introduction to data science and its applications.',
        lectures: [
            { title: 'Data Analysis with Pandas', content: 'Reading data, cleaning, and basic analysis.' },
            { title: 'Data Visualization with Matplotlib', content: 'Creating charts and graphs.' }
        ]
    },
    {
        title: 'javascript-frameworks',
        name: 'JavaScript Frameworks and Libraries',
        thumbnail: '',
        description: 'Explore popular JavaScript frameworks and libraries.',
        lectures: [
            { title: 'React.js Basics', content: 'Components, props, and state.' },
            { title: 'Vue.js Fundamentals', content: 'Introduction to Vue.js and its core concepts.' }
        ]
    },
    {
        title: 'database-management',
        name: 'Database Management Essentials',
        thumbnail: '',
        description: 'Learn the basics of managing databases.',
        lectures: [
            { title: 'SQL Fundamentals', content: 'Basic queries and database design.' },
            { title: 'NoSQL Databases', content: 'Introduction to MongoDB and document-based databases.' }
        ]
    },
    {
        title: 'mobile-app-development',
        name: 'Mobile App Development Basics',
        thumbnail: '',
        description: 'An introduction to building mobile applications.',
        lectures: [
            { title: 'iOS Development', content: 'Building basic iOS apps with Swift.' },
            { title: 'Android Development', content: 'Introduction to Android Studio and Java/Kotlin.' }
        ]
    },
    {
        title: 'cyber-security',
        name: 'Cyber Security Fundamentals',
        thumbnail: '',
        description: 'Learn the essentials of cyber security.',
        lectures: [
            { title: 'Network Security', content: 'Firewalls, VPNs, and secure communication.' },
            { title: 'Ethical Hacking', content: 'Penetration testing and vulnerability assessment.' }
        ]
    },
    {
        title: 'cloud-computing',
        name: 'Cloud Computing Basics',
        thumbnail: '',
        description: 'An introduction to cloud computing and its services.',
        lectures: [
            { title: 'Introduction to AWS', content: 'Basic services and cloud deployment.' },
            { title: 'Google Cloud Platform', content: 'Overview of GCP services and deployment options.' }
        ]
    },
    {
        title: 'artificial-intelligence',
        name: 'Introduction to Artificial Intelligence',
        thumbnail: '',
        description: 'Explore the principles and applications of artificial intelligence.',
        lectures: [
            { title: 'Machine Learning Fundamentals', content: 'Supervised and unsupervised learning.' },
            { title: 'Natural Language Processing', content: 'Text preprocessing and sentiment analysis.' }
        ]
    }
];


  return (
    <div className="all-courses">
      <StudentSidebar
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
      <div className="allcourses-main-content">
        <Container>
          <Box className="allcourses-heading-container">
            <Typography className="text-left heading" variant="h3" color="primary">
              My Courses
            </Typography>
          </Box>
          <div className="allcourses-card-container">
            <CardOfAllCourse courses={courses} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AllCourses;
