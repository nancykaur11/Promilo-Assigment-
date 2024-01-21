import React, { useState } from "react";
import sha256 from "crypto-js/sha256";
import axios from "axios";
import "./App.css";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    const re =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  };
  const handleLogin = async () => {
    let valid = true;

    if (!validateEmail(email)) {
      setErrors((prev) => ({ ...prev, email: "Invalid email format" }));
      valid = false;
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }

    if (!validatePassword(password)) {
      setErrors((prev) => ({
        ...prev,
        password: "Password does not meet requirements",
      }));
      valid = false;
    } else {
      setErrors((prev) => ({ ...prev, password: "" }));
    }

    if (valid) {
      const hashedPassword = sha256(password).toString();
      const formData = new FormData();
      formData.append("username", email);
      formData.append("password", hashedPassword);
      formData.append("grant_type", "password");

      try {
        const response = await axios.post(
          "https://apiv2stg.promilo.com/user/oauth/token",
          formData,
          {
            headers: {
              Authorization: "Basic UHJvbWlsbzpxNCE1NkBaeSN4MiRHQg==",
            },
          }
        );
        console.log("Login successful", response.data.response.access_token);

        if (response.data.response.access_token) {
          localStorage.setItem(
            "authToken",
            response.data.response.access_token
          );
          navigate("/home");
        }
      } catch (error) {
        console.error("Login failed:", error);
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        className={`login-input ${errors.email ? "error" : ""}`}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <small className="error-message">{errors.email}</small>

      <input
        type="password"
        placeholder="Password"
        className={`login-input ${errors.password ? "error" : ""}`}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <small className="error-message">{errors.password}</small>

      <button onClick={handleLogin} className="login-button">
        Login
      </button>
    </div>
  );
};

export default Login;
