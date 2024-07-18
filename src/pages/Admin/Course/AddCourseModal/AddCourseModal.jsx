import React, { useState } from "react";
import { Modal, Typography, TextField, Box, Button } from "@mui/material";
import axios from "axios";
import { baseServerUrl } from "../../../../constants";

const AddCourseModal = ({ open, handleClose, addCourse }) => {
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseThumbnail, setCourseThumbnail] = useState(null);
  const [imgLabel, setImgLabel] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("courseName", courseName);
      formData.append("courseDescription", courseDescription);
      formData.append("courseThumbnail", courseThumbnail);
      formData.append("lectures", JSON.stringify([])); // Assuming lectures is an empty array initially

      const response = await axios.post(
        `${baseServerUrl}/api/courses/addcourse`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      addCourse(response.data.course);
      setCourseName("");
      setCourseDescription("");
      setCourseThumbnail(null);
      setImgLabel("");
      handleClose();
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImgLabel(file.name);
      setCourseThumbnail(file);
    } else {
      alert("Please upload a valid image file.");
      setCourseThumbnail(null);
      setImgLabel("");
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography
          id="modal-modal-title"
          variant="h4"
          color="textSecondary"
          sx={{ mb: 2 }}
        >
          Add Course
        </Typography>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <TextField
            fullWidth
            required
            label="Course Name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            required
            label="Course Description"
            multiline
            rows={3}
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            sx={{ mb: 2 }}
          />
          <div className="input__file">
            <label htmlFor="course-thumbnail">Course Thumbnail</label>
            <input
              type="file"
              id="course-thumbnail"
              required
              accept="image/*"
              onChange={handleFileChange}
              className="inputfile__style"
            />
            <label>{imgLabel || "Choose photo"}</label>
          </div>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default AddCourseModal;
