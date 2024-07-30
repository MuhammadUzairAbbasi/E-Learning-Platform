import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FiMail, FiLock } from "react-icons/fi";
import axios from "axios";
import { baseServerUrl } from "../../constants";
import { toast } from "react-toastify";
import "./forgot.css"
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseServerUrl}/api/auth/forgot-password`, { email, password });
      toast.success("forgot password successfully");
      navigate("/login");
    } catch (err) {
      console.log(err);
      toast.error("Failed to reset password.");
    }
  };

  return (
    <div className="forgot-password-page">
      <div className="paper">
        <h3 className="logo-text">Edu Hub</h3>
        <h5 className="text-center text-xl font-semibold text-primary mb-3">
          Forgot Password
        </h5>
        <Form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-4 form-group-icon">
            <FiMail className="text-xl input-icon" />
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="input-with-icon"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className="mb-4 form-group-icon">
            <FiLock className="text-xl input-icon" />
            <Form.Control
              type="password"
              placeholder="New Password"
              className="input-with-icon"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          <Button
            variant="primary"
            type="submit"
            className="mt-3 submit-button"
          >
            Submit
          </Button>
          <div className="text-center mt-4">
            <Link to="/login" className="text-blue-500">
              Back to Login
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassword;
