import React, { useState } from "react";
import { Modal, Button, TextField } from "@mui/material";
import styles from "./AddLectureModal.module.css";

const AddLectureModal = ({ open, handleClose, handleAddLecture, courseId }) => {
  const [lectureData, setLectureData] = useState({
    title: "",
    description: "",
    video: "",
    pdf: "",
  });

  const handleChange = (e) => {
    setLectureData({ ...lectureData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    handleAddLecture({ ...lectureData, courseId });
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div className={styles.modalContent}>
        <h2>Add Lecture</h2>
        <TextField
          label="Lecture Title"
          name="title"
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Description"
          name="description"
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Video URL"
          name="video"
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="PDF URL"
          name="pdf"
          onChange={handleChange}
          fullWidth
        />
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Add Lecture
        </Button>
      </div>
    </Modal>
  );
};

export default AddLectureModal;
