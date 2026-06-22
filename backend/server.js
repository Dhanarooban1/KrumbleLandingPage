import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userroutes from "./routes/usersrouters.js";

dotenv.config();


const app = express();

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      process.env.FRONTEND_URL,
    ],
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use("/",userroutes);

// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Server is running 🚀",
  });
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});