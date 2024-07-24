import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import {
  Avatar,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Grid,
  Box,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { UserContext } from "../../App";
import "./Profile.css";
import { baseServerUrl } from "../../constants";
import StudentSidebar from "../StudentSidebar/StudentSidebar";
import {toast} from 'react-toastify'

const Profile = () => {
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);
  const [profile, setProfile] = useState({});
  const [profilePicture, setProfilePicture] = useState(null);
  // const [errorMessage, setErrorMessage] = useState("");
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${baseServerUrl}/api/users/profile/${user._id}`
        );
        console.log(response.data);
        setProfile(response.data);
        setProfilePicture(response.data.profilePicture);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfile();
  }, [user._id]);

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

  const handleSave = async () => {
    const { firstName, lastName, phoneNumber, newPassword, confirmPassword } =
      profile;

    // Basic validation checks
    if (
      !firstName &&
      !lastName &&
      !phoneNumber &&
      !newPassword &&
      !confirmPassword
    ) {
      // setErrorMessage("Please fill in at least one field.");
      toast.warning("Please fill in at least one field.");
      return;
    }
    if (phoneNumber && !/^\d+$/.test(phoneNumber)) {
      // setErrorMessage("Phone number must contain only digits.");
      toast.warning("Phone number must contain only digits");
      return;
    }
    if (phoneNumber && phoneNumber.length !== 11) {
      // setErrorMessage("Phone number must be 11 digits long.");
      toast.warning("Phone number must be 11 digits long.");
      return;
    }
    if (newPassword && newPassword.length < 8) {
      // setErrorMessage("Password must be at least 8 characters long.");
      toast.warning("Password must be at least 8 characters long.");
      return;
    }
    if (newPassword !== confirmPassword) {
      // setErrorMessage("Passwords do not match.");
      toast.warning("Passwords do not match.");
      return;
    }

    // Construct the updates object
    const updates = {
      profilePicture,
      ...(firstName && { firstName }),
      ...(lastName && { lastName }),
      ...(phoneNumber && { phoneNumber }),
      ...(newPassword && { newPassword }),
    };

    try {
      const response = await axios.put(
        `${baseServerUrl}/api/users/profile/update/${user._id}`,
        updates
      );

      if (response.data) {
        setProfile(response.data);
        toast.success("Profile Updated Successfully")
      }
    } catch (error) {
      console.error("Error updating profile data:", error);
      toast.error("Error Updating Profile")
    }
  };

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="profilepage">
      <StudentSidebar
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
      <div className="profileinfo mt-2">
        <Box
          display="flex"
          marginLeft={5}
          justifyContent="flex-start"
          alignItems="center"
          mb={2}
        >
          <Box
            display="flex"
            alignItems="center"
            sx={{ width: "100%", maxWidth: 600 }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mr={4}
            >
              <Avatar
                src={profilePicture}
                className="avatar"
                sx={{
                  width: 100,
                  height: 100,
                  border: "2px solid #1976d2",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                  cursor: "pointer",
                }}
              />
              <Box mt={2} textAlign="center" >
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
                    component="span"
                    color="primary"
                    size="large"
                    startIcon={<PhotoCamera />}
                  >
                    Add Picture
                  </Button>
                </label>
              </Box>
            </Box>
            <Box>
              <Typography
                variant="h4"
                sx={{ fontFamily: "Roboto, sans-serif", fontWeight: "bold" }}
              >
                {profile.username}
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontFamily: "Roboto, sans-serif" }}
              >
                {profile.email}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* {errorMessage && (
          <Box mb={2} textAlign="center">
            <Typography variant="body1" color="error">
              {errorMessage}
            </Typography>
          </Box>
        )} */}

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
                    name="firstName"
                    value={profile.firstName || ""}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    name="lastName"
                    value={profile.lastName || ""}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    name="phoneNumber"
                    value={profile.phoneNumber || ""}
                    onChange={handleChange}
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="New Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    name="newPassword"
                    value={profile.newPassword || ""}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    name="confirmPassword"
                    value={profile.confirmPassword || ""}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Box mt={4} display="flex" justifyContent="flex-end">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ borderRadius: 3, px: 4 }}
                  onClick={handleSave}
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
