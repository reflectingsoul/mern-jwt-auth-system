import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";

const app = express();

/*
  CORS Configuration
  Allows requests from frontend
*/
app.use(
  cors({
    origin: "*", // later you can replace with your Vercel domain
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

/*
  Middleware
*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*
  Health Check Route
*/
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "API running 🚀"
  });
});

/*
  API Routes
*/
app.use("/api/auth", authRoutes);

/*
  404 Handler
*/
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found"
  });
});

export default app;
