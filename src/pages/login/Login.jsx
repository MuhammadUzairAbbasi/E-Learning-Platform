import React, { useContext, useState, useEffect } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FiMail, FiLock } from "react-icons/fi";
import google from "./images/google.svg";
import github from "./images/github.svg";
import linkedin from "./images/linkedin.svg";
import axios from "axios";
import { baseServerUrl } from "../../constants";
import { UserContext } from "../../App";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      navigate(user.role === "Admin" ? "/admindashboard" : "/dashboard");
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    try {
      const res = await axios.post(`${baseServerUrl}/api/auth/login`, user);
      localStorage.setItem("user", JSON.stringify(res.data));
      toast.success("Login Successfully");
      setUser(res.data);
    } catch (err) {
      console.log(err, "error haiii");
      toast.error("Login Error");
    }
  };

  return (
    <div className="loginpage">
      <div className="paper">
        <h3 className="logo-text">Welcome to Edu Hub</h3>
        <h5 className="text-center text-xl font-semibold text-primary mb-3">
          Login to Continue ...
        </h5>
        <Form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-4 form-group-icon">
            <FiMail className="text-xl input-icon" />
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="input-with-icon"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-4 form-group-icon">
            <FiLock className="text-xl input-icon" />
            <Form.Control
              type="password"
              placeholder="Password"
              className="input-with-icon"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="text-right font-bold text-blue-500 mr-7">
            <Link to="">Forget Password?</Link>
          </div>
          <Button
            variant="primary"
            type="submit"
            className="mt-3 submit-button"
          >
            Log In
          </Button>
          <div className="text-center  ">
            <h5>
              Don't Have an Account?{" "}
              <Link to="/register" className="text-blue-500">
                Sign Up
              </Link>
            </h5>
          </div>

          <h5 className="mt-3 mb-2 text-center font-semibold">OR</h5>
          <h4 className="mt-3 mb-2 text-center font-semibold">LogIn with</h4>
          <div className="social-icons mt-4 text-center gap-5">
            <Link>
              <img src={google} alt="Google" />
            </Link>
            <Link>
              <img src={github} alt="Github" />
            </Link>
            <Link>
              <img src={linkedin} alt="Linkedin" />
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
