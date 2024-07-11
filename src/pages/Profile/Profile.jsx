import React, { useState } from "react";
import {
  Avatar,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Grid,
  Box,
  IconButton,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import StudentSidebar from "../StudentSidebar/StudentSidebar";
import "./Profile.css";

const Profile = () => {
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profilepage">
      <StudentSidebar
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
      <div className="profileinfo mt-2">
        <Box display="flex" marginLeft={5} justifyContent="flex-start" alignItems="center" mb={2}>
          <Box mr={2} >
            <Avatar
              src={profilePicture}
              className="avatar"
              sx={{
                width: 120,
                height: 120,
                border: "2px solid #1976d2",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                cursor: "pointer",
              }}
            />
            <Box display="flex" justifyContent="center" mt={2}>
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="upload-photo"
                type="file"
                onChange={handleProfilePictureChange}
              />
              <label htmlFor="upload-photo">
                <Button
                  variant="contained"
                  color="primary"
                  component="span"
                  startIcon={<PhotoCamera />}
                >
                  Upload Picture
                </Button>
              </label>
            </Box>
          </Box>
          <Box ml={8} textAlign="start">
            <Typography variant="h4" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold' }}>NicolasHenry</Typography>
            <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif' }}>
              nicolasmandy@greekytech.com
            </Typography>
          </Box>
        </Box>

        <div className="profile details">
          <Card
            variant="outlined"
            sx={{
              mb: 2,
              p: 1,
              backgroundColor: "#f5f5f5",
              borderRadius: 2,
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <CardContent>
              <Typography
                className="mb-3"
                variant="h5"
                gutterBottom
                sx={{ fontFamily: "Roboto, sans-serif", fontWeight: "bold" }}
              >
                Personal Details
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    defaultValue="Nicolas"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    defaultValue="Henry"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    defaultValue="123456789"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="New Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Box mt={4} display="flex" justifyContent="flex-end">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ borderRadius: 3, px: 4 }}
                >
                  Save
                </Button>
              </Box>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
