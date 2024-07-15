// ViewCourseModal.js
import React from 'react';
import { Modal, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ViewCourseModal = ({ open, handleClose, courses, handleEditCourse, handleDeleteCourse }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="view-course-modal-title"
      aria-describedby="view-course-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          maxHeight: '80%',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          overflowY: 'auto',
        }}
      >
        <Typography id="view-course-modal-title" variant="h4" color="textSecondary" sx={{ mb: 2 }}>
          View Courses
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Course Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Thumbnail</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {courses.map((course) => (
                <TableRow key={course.id}>
                  <TableCell>{course.name}</TableCell>
                  <TableCell>{course.description}</TableCell>
                  <TableCell>
                    {course.thumbnail && (
                      <img
                        src={URL.createObjectURL(course.thumbnail)}
                        alt="Course Thumbnail"
                        style={{ width: '90px', borderRadius: '4px' }}
                      />
                    )}
                  </TableCell>
                  <TableCell>
                    <IconButton size="large" onClick={() => handleEditCourse(course.id)}>
                      <EditIcon fontSize="medium" />
                    </IconButton>
                    <IconButton size="large" onClick={() => handleDeleteCourse(course.id)}>
                      <DeleteIcon fontSize="medium" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Modal>
  );
};

export default ViewCourseModal;
