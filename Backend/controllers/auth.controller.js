const authService = require("../services/auth.service");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body || {};

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, email and password are required",
      });
    }

    console.info("Registration request received:", { name, email });

    res.status(201).json({
      message: "Registration received (not saved)",
      user: { name, email },
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
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
    res.status(401).json({
      message: error.message,
    });
  }
};

module.exports = {
  register,
  login,
};