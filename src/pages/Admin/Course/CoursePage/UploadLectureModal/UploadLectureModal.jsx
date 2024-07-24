import React, { useState } from "react";
import {
  Modal,
  Typography,
  TextField,
  Box,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import axios from "axios";
import { baseServerUrl } from "../../../../../constants";

const UploadLectureModal = ({ open, handleClose, courseId, addLecture }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoType, setVideoType] = useState("link");
  const [videoLink, setVideoLink] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [videoLabel, setVideoLabel] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoFile(file);
      setVideoLabel(file.name);
    }
  };

  const handleVideoTypeChange = (e) => {
    setVideoType(e.target.value);
    setVideoLink("");
    setVideoFile(null);
    setVideoLabel("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("courseId", courseId);
      formData.append("videoType", videoType);

      if (videoType === "link") {
        formData.append("videoLink", videoLink);
      } else if (videoType === "file") {
        formData.append("videoFile", videoFile);
      }

      const response = await axios.post(
        `${baseServerUrl}/api/courses/${courseId}/addlecture`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      addLecture(response.data.lecture);
      // Reset form fields
      setTitle("");
      setDescription("");
      setVideoLink("");
      setVideoFile(null);
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
          <FormControl component="fieldset" sx={{ mb: 2 }}>
            <FormLabel component="legend">Video Upload Option</FormLabel>
            <RadioGroup
              name="videoType"
              value={videoType}
              onChange={handleVideoTypeChange}
            >
              <Box sx={{ display: "flex", gap: 2 }}>
                <FormControlLabel
                  value="link"
                  control={<Radio />}
                  label="Video Link"
                />
                <FormControlLabel
                  value="file"
                  control={<Radio />}
                  label="Video File"
                />
              </Box>
            </RadioGroup>
          </FormControl>
          {videoType === "link" ? (
            <div>
              <TextField
                fullWidth
                required
                label="Video URL"
                value={videoLink}
                onChange={(e) => setVideoLink(e.target.value)}
                sx={{ mb: 2 }}
              />{" "}
            </div>
          ) : (
            <div className="input__file">
              <input
                type="file"
                id="video-file"
                accept="video/*"
                onChange={handleFileChange}
                className="inputfile__style"
              />
              <label>{videoLabel || "Choose Video"}</label>
            </div>
          )}
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
