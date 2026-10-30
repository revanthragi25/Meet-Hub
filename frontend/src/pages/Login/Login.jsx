import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Update form fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setMessage("");
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Handle login
  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("");

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    // Simulate a login request without a backend
    setTimeout(() => {
      const user = {
        email: formData.email.trim(),
        name: formData.email.trim().split("@")[0],
      };

      // Store demo session
      const storage = rememberMe ? localStorage : sessionStorage;

      storage.setItem("meethubDemoUser", JSON.stringify(user));

      setLoading(false);
      setMessage("Login successful! Welcome to MeetHub.");

      // Navigate after showing success
      setTimeout(() => {
        navigate("/dashboard");
      }, 800);
    }, 1000);
  };

  return (
    <div className="login-page">
      {/* Left section */}
      <section className="login-visual">
        <div className="visual-overlay"></div>

        <div className="visual-content">
          <Link to="/" className="brand">
            <span className="brand-icon">M</span>
            <span>MeetHub</span>
          </Link>

          <div className="visual-text">
            <span className="eyebrow">CONNECT. COLLABORATE. CELEBRATE.</span>

            <h1>
              Every great event
              <br />
              starts with a <span>connection.</span>
            </h1>

            <p>
              Discover experiences, meet amazing people, and bring your
              community together with MeetHub.
            </p>

            <div className="visual-stats">
              <div>
                <strong>10K+</strong>
                <span>Community members</span>
              </div>

              <div>
                <strong>500+</strong>
                <span>Events created</span>
              </div>
            </div>
          </div>

          <p className="visual-footer">
            Make every moment worth remembering.
          </p>
        </div>
      </section>

      {/* Right section */}
      <section className="login-form-section">
        <div className="login-card">
          <div className="mobile-brand">
            <span className="brand-icon">M</span>
            <span>MeetHub</span>
          </div>

          <div className="form-heading">
            <span className="welcome-label">WELCOME BACK</span>
            <h2>Sign in to MeetHub</h2>
            <p>Enter your details to continue your journey.</p>
          </div>

          {message && (
            <div className="login-message success-message" role="status">
              <span>✓</span>
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email address</label>

              <div
                className={`input-wrapper ${errors.email ? "input-error" : ""}`}
              >
                <span className="input-icon" aria-hidden="true">
                  ✉
                </span>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
              </div>

              {errors.email && (
                <span className="field-error" id="email-error">
                  {errors.email}
                </span>
              )}
            </div>

            {/* Password */}
            <div className="form-group">
              <div className="label-row">
                <label htmlFor="password">Password</label>

                <button
                  type="button"
                  className="forgot-password"
                  onClick={() =>
                    setMessage(
                      "Password recovery will be available when authentication is implemented."
                    )
                  }
                >
                  Forgot password?
                </button>
              </div>

              <div
                className={`input-wrapper ${
                  errors.password ? "input-error" : ""
                }`}
              >
                <span className="input-icon" aria-hidden="true">
                  ◈
                </span>

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  aria-invalid={Boolean(errors.password)}
                  aria-describedby={
                    errors.password ? "password-error" : undefined
                  }
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              {errors.password && (
                <span className="field-error" id="password-error">
                  {errors.password}
                </span>
              )}
            </div>

            {/* Remember me */}
            <div className="remember-row">
              <label className="remember-label">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Remember me</span>
              </label>

              <span className="secure-note">Secure sign in</span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="loading-spinner"></span>
                  Signing in...
                </>
              ) : (
                <>
                  Sign in
                  <span aria-hidden="true">→</span>
                </>
              )}
            </button>
          </form>

          <div className="divider">
            <span>OR</span>
          </div>

          <p className="register-prompt">
            Don't have an account?{" "}
            <Link to="/register">Create an account</Link>
          </p>

          <p className="terms-note">
            By continuing, you agree to our{" "}
            <Link to="/terms">Terms of Service</Link> and{" "}
            <Link to="/privacy">Privacy Policy</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Login;