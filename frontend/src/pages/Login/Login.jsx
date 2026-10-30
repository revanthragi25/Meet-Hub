import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Leftcomp from "../../components/Leftcomp/Leftcomp";
import "./login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const user = {
      email: formData.email.trim(),
      name: formData.email.trim().split("@")[0],
      role: "user",
    };

    const storage = rememberMe ? localStorage : sessionStorage;

    storage.setItem("meethubDemoUser", JSON.stringify(user));

    navigate("/dashboard");
  }

  return (
    <div className="login-page">
      <Leftcomp />

      <section className="login-right">
        <div className="login-card">
          <h1 className="login-logo">
            Meet<span>Hub</span>
          </h1>

          <h2>Welcome Back</h2>

          <p className="login-subtitle">
            Sign in to continue your MeetHub journey.
          </p>

          <form className="login-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
              />
              {errors.email && (
                <p className="error-message">{errors.email}</p>
              )}
            </div>

            <div className="form-group">
              <div className="login-label-row">
                <label htmlFor="password">Password</label>
                <button
                  type="button"
                  className="forgot-password"
                  onClick={() =>
                    alert("Password recovery will be available soon.")
                  }
                >
                  Forgot password?
                </button>
              </div>

              <div className="login-password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="show-password"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              {errors.password && (
                <p className="error-message">{errors.password}</p>
              )}
            </div>

            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember me
            </label>

            <button type="submit" className="login-button">
              Sign In <span>→</span>
            </button>
          </form>

          <p className="login-register-link">
            Don't have an account? <Link to="/register">Create an account</Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Login;