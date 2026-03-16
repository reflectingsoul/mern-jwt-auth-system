import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(cors());  // ⭐ allow frontend requests

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API running 🚀");
});

app.use("/api/auth", authRoutes);

export default app;