const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("node:path");
const dotenv = require("dotenv");

dotenv.config({ path: path.join(__dirname, ".env.local") });
dotenv.config({ path: path.join(__dirname, ".env") });

const authRoutes = require("./routes/auth.routes");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;

async function startServer() {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not set in Backend/.env");
  }

  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB connected successfully");

  app.listen(PORT, () => {
    console.log(`Meet_Hub server is running on ${PORT}`);
  });
}

startServer().catch((error) => {
  console.error("Failed to start backend:", error.message);
  process.exitCode = 1;
});