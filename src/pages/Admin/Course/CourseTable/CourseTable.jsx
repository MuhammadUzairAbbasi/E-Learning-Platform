import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Paper,
  IconButton,
} from "@mui/material";
import {
  Delete as DeleteIcon,
  Visibility as VisibilityIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom"; // Import Link
import styles from "./CourseTable.module.css"; // Importing CSS Module

const CourseTable = ({ courses, handleDeleteCourse }) => {
  return (
    <div className={styles.container}>
      <TableContainer
        component={Paper}
        className={styles.tableContainer}
        sx={{ boxShadow: 3, borderRadius: 2, bgcolor: "#f5f5f5" }}
      >
        <Table
          sx={{ width: "100%", borderCollapse: "collapse" }}
          className={styles.table}
        >
          <TableHead className="sticky">
            <TableRow>
              <TableCell align="center" className={styles.th}>
                <TableSortLabel>Id</TableSortLabel>
              </TableCell>
              <TableCell align="center" className={styles.th}>
                <TableSortLabel>Name</TableSortLabel>
              </TableCell>
              <TableCell align="center" className={styles.th}>
                <TableSortLabel>Thumbnail</TableSortLabel>
              </TableCell>
              <TableCell align="center" className={styles.th}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.map((course) => (
              <TableRow key={course._id}>
                <TableCell align="center" className={styles.td}>
                  {String(course._id).slice(-4)}
                </TableCell>
                <TableCell align="center" className={styles.td}>
                  {course.name}
                </TableCell>
                <TableCell align="center" className={styles.td}>
                  <div className={styles.thumbnailWrapper}>
                    <img
                      src={course.thumbnail}
                      alt={course.name}
                      className={styles.thumbnail}
                    />
                  </div>
                </TableCell>
                <TableCell align="center">
                  <Link to={`/courses/${course._id}`}>
                    <IconButton aria-label="view" className={styles.iconButton}>
                      <VisibilityIcon />
                    </IconButton>
                  </Link>
                  <IconButton
                    aria-label="delete"
                    onClick={() => handleDeleteCourse(course._id)}
                    className={styles.iconButton}
                  >
                    <DeleteIcon sx={{ color: "red" }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CourseTable;
