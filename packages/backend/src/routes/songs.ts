import { Router } from "express";
import { getCurrentSongs } from "../data";
import { SongsResponse } from "../types";

const router = Router();

// GET /songs - Returns list of songs with current progress
router.get("/", (req, res) => {
  try {
    const songs = getCurrentSongs();
    const response: SongsResponse = { songs };

    res.json(response);
  } catch (error) {
    console.error("Error fetching songs:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
