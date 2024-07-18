import React, { useState } from "react";
import { Modal, Typography, TextField, Box, Button } from "@mui/material";
import axios from "axios";
import { baseServerUrl } from "../../../../../constants";

const UploadLectureModal = ({ open, handleClose, courseId, addLecture }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [pdfLabel, setPdfLabel] = useState("");
  const [videoLabel, setVideoLabel] = useState("");

  const handleFileChange = (e, setFile, setLabel) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      setLabel(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
         const formData = new FormData();
         formData.append("title", title);
         formData.append("description", description);
         if (pdfFile) {
           formData.append("pdf", pdfFile);
         }
         if (videoFile) {
           formData.append("video", videoFile);
         }
         console.log(pdfFile,videoFile);
      const response = await axios.post(
        `${baseServerUrl}/api/courses/${courseId}/addlecture`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      addLecture(response.data.lecture);
      // Reset form fields
      setTitle("");
      setDescription("");
      setPdfFile(null);
      setVideoFile(null);
      setPdfLabel("");
      setVideoLabel("");
      handleClose();
    } catch (error) {
      console.error("Error uploading lecture:", error);
    }
  };

 

  return (
    <Modal open={open} onClose={handleClose}>
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
        <Typography variant="h4" color="textSecondary" sx={{ mb: 2 }}>
          Upload Lecture
        </Typography>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <TextField
            fullWidth
            required
            label="Lecture Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            required
            label="Lecture Description"
            multiline
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            sx={{ mb: 2 }}
          />
          <div className="input__file">
            <label htmlFor="pdf-file">PDF File</label>
            <input
              type="file"
              id="pdf-file"
              accept="application/pdf"
              onChange={(e) => handleFileChange(e, setPdfFile, setPdfLabel)}
              className="inputfile__style"
            />
            <label>{pdfLabel || "Choose PDF"}</label>
          </div>
          <div className="input__file">
            <label htmlFor="video-file">Video File</label>
            <input
              type="file"
              id="video-file"
              accept="video/*"
              onChange={(e) => handleFileChange(e, setVideoFile, setVideoLabel)}
              className="inputfile__style"
            />
            <label>{videoLabel || "Choose Video"}</label>
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

export default UploadLectureModal;
