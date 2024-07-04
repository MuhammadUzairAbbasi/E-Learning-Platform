import webdev from './Images/webdev.png'
import adjavscript from './Images/adjavscript.png'
import reactjs from './Images/reactjs.png'
import node_express from './Images/node_express.png'

const courseData = [
  {
    "title": "WEB101",
    "name": "Introduction to Web Development",
    "thumbnail": webdev,
    "date": "Jan-Jun 2021",
    "lectures": [
      {
        "id": 1,
        "title": "Lecture 1: Basics of HTML",
        "description": "Introduction to HTML, basic tags, and structure.",
        "pdf": "path/to/html_basics.pdf"
      },
      {
        "id": 2,
        "title": "Lecture 2: CSS Fundamentals",
        "description": "Understanding CSS, selectors, and properties.",
        "pdf": "path/to/css_fundamentals.pdf"
      }
    ]
  },
  {
    "title": "JS201",
    "name": "Advanced JavaScript",
    "thumbnail": adjavscript,
    "date": "Mar-Jun 2023",
    "lectures": [
      {
        "id": 3,
        "title": "Lecture 1: ES6 Features",
        "description": "In-depth look at ES6 features including let, const, and arrow functions.",
        "pdf": "path/to/es6_features.pdf"
      },
      {
        "id": 4,
        "title": "Lecture 2: Asynchronous JavaScript",
        "description": "Understanding async/await, promises, and callbacks.",
        "pdf": "path/to/async_js.pdf"
      }
    ]
  },
  {
    "title": "REACT301",
    "name": "React.js for Beginners",
    "thumbnail": reactjs,
    "date": "Jan-Sep 2022",
    "lectures": [
      {
        "id": 5,
        "title": "Lecture 1: Introduction to React",
        "description": "Basics of React, JSX, and component structure.",
        "pdf": "path/to/intro_to_react.pdf"
      },
      {
        "id": 6,
        "title": "Lecture 2: State and Props",
        "description": "Understanding state and props in React components.",
        "pdf": "path/to/state_and_props.pdf"
      }
    ]
  },
  {
    "title": "NODE401",
    "name": "Node.js and Express.js",
    "thumbnail": node_express,
    "date": "July-Nov 2023",
    "lectures": [
      {
        "id": 7,
        "title": "Lecture 1: Introduction to Node.js",
        "description": "Overview of Node.js, installation, and basic concepts.",
        "pdf": "path/to/intro_to_node.pdf"
      },
      {
        "id": 8,
        "title": "Lecture 2: Express.js Basics",
        "description": "Getting started with Express.js, routing, and middleware.",
        "pdf": "path/to/express_basics.pdf"
      }
    ]
  }
];

export default courseData;
