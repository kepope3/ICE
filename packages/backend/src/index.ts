import express from "express";
import cors from "cors";
import songsRouter from "./routes/songs";

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/songs", songsRouter);

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
  console.log(`📊 Songs endpoint: http://localhost:${PORT}/api/songs`);
  console.log(`❤️  Health check: http://localhost:${PORT}/health`);
});

export default app;
