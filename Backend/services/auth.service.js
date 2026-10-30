const { randomBytes, scrypt: scryptCallback, timingSafeEqual } = require("node:crypto");
const { promisify } = require("node:util");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const scrypt = promisify(scryptCallback);

async function hashPassword(password) {
  const salt = randomBytes(16).toString("hex");
  const hash = await scrypt(password, salt, 64);
  return `${salt}:${hash.toString("hex")}`;
}

async function verifyPassword(password, storedPassword) {
  const [salt, storedHash] = storedPassword.split(":");
  if (!salt || !storedHash) {
    return false;
  }

  const expectedHash = Buffer.from(storedHash, "hex");
  const actualHash = await scrypt(password, salt, expectedHash.length);
  return expectedHash.length === actualHash.length &&
    timingSafeEqual(expectedHash, actualHash);
}

function toPublicUser(user) {
  return {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
}

async function register(name, email, password) {
  const user = await User.create({
    name,
    email: email.trim().toLowerCase(),
    password: await hashPassword(password),
  });

  return toPublicUser(user);
}

async function login(email, password) {
  const user = await User.findOne({ email: email.trim().toLowerCase() });
  if (!user || !(await verifyPassword(password, user.password))) {
    throw new Error("Invalid email or password");
  }

  if (!process.env.JWT_SECRET) {
    const error = new Error("JWT_SECRET is not configured in Backend/.env");
    error.code = "JWT_SECRET_MISSING";
    throw error;
  }

  return {
    token: jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    }),
    user: toPublicUser(user),
  };
}

module.exports = {
  register,
  login,
};