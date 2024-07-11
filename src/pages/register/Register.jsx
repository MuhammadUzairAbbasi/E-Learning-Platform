import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import { Paper, Typography } from "@mui/material";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import google from './images/google.svg';
import github from './images/github.svg';
import linkedin from './images/linkedin.svg';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="registerpage">
      <div className="paper">
        <h3 className="logo-text text-center">Register In Edu Hub</h3>
        <Form>
          <div className="mb-4 form-group-icon">
            <FiUser className="text-xl input-icon" />
            <Form.Control type="text" placeholder="User Name" className="input-with-icon" />
          </div>
          <div className="mb-4 form-group-icon">
            <FiMail className="text-xl input-icon" />
            <Form.Control type="email" placeholder="Enter email" className="input-with-icon" />
          </div>
          <div className="password-row">
            <div className="password-container form-group-icon">
              <FiLock className="text-xl input-icon" />
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="input-with-icon"
              />
              <div className="password-icon" onClick={togglePasswordVisibility}>
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </div>
            </div>
            <div className="password-container form-group-icon">
              <FiLock className="text-xl input-icon" />
              <Form.Control
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="input-with-icon"
              />
              <div className="password-icon" onClick={toggleConfirmPasswordVisibility}>
                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
              </div>
            </div>
          </div>
          <Button variant="primary" type="submit" className="submit-button">
            Sign Up
          </Button>
          <Typography style={{ color: "GrayText" }} variant="subtitle2" className="text-center mb-3">
            Already have an Account?{" "}
            <span className="text-primary">
              <Link to="/Login">Login Here</Link>
            </span>
          </Typography>
          <div className="text-center font-bold mt-0">
            <h5 className="m-2">OR</h5>
            <h4 className="font-semibold">Sign Up with</h4>
            <div className="social-icons mt-4 gap-5">
              <Link><img src={google} alt="Google" /></Link>
              <Link><img src={github} alt="Github" /></Link>
              <Link><img src={linkedin} alt="Linkedin" /></Link>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
