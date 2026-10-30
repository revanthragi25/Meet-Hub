const authService = require("../services/auth.service");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body || {};

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, email and password are required",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        message: "Password must contain at least 8 characters",
      });
    }

    console.info("Registration request received:", { name, email });
    const user = await authService.register(name.trim(), email, password);

    res.status(201).json({
      message: "Registration successful",
      user,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: "An account with this email already exists",
      });
    }

    console.error("Registration failed:", error.message);
    res.status(500).json({
      message: "Registration failed",
    });
  }
};


const login = async (req, res) => {
  try {
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const result = await authService.login(
      email,
      password
    );

    res.status(200).json({
      message: "Login successful",
      ...result,
    });
  } catch (error) {
    const status = error.code === "JWT_SECRET_MISSING" ? 500 : 401;
    if (status === 500) {
      console.error("Login configuration error:", error.message);
    }
    res.status(status).json({
      message: status === 401 ? error.message : "Login is not configured",
    });
  }
};

module.exports = {
  register,
  login,
};