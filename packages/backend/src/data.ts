import { Song } from "./types";
import * as fs from "fs";
import * as path from "path";

export const baseSongs = [
  { id: 1, name: "Flowers", author: "Miley Cyrus" },
  { id: 2, name: "Anti-Hero", author: "Taylor Swift" },
  { id: 3, name: "As It Was", author: "Harry Styles" },
  { id: 4, name: "Heat Waves", author: "Glass Animals" },
  { id: 5, name: "Unholy", author: "Sam Smith ft. Kim Petras" },
  { id: 6, name: "Calm Down", author: "Rema & Selena Gomez" },
  { id: 7, name: "Bad Habit", author: "Steve Lacy" },
  { id: 8, name: "I'm Good (Blue)", author: "David Guetta & Bebe Rexha" },
  { id: 9, name: "Lavender Haze", author: "Taylor Swift" },
  { id: 10, name: "Creepin'", author: "Metro Boomin, The Weeknd, 21 Savage" },
];

const PROGRESS_FILE = path.join(__dirname, "progress.json");

const initialProgress = [
  0.15, 0.27, 0.12, 0.38, 0.03, 0.1, 0.35, 0.58, 0.41, 0.32,
];

const loadProgress = (): number[] => {
  try {
    if (fs.existsSync(PROGRESS_FILE)) {
      const data = fs.readFileSync(PROGRESS_FILE, "utf8");
      const parsed = JSON.parse(data);
      return Array.isArray(parsed) ? parsed : initialProgress;
    }
  } catch (error) {
    console.warn("Failed to load progress file, using initial values:", error);
  }
  return [...initialProgress];
};

const saveProgress = (progress: number[]): void => {
  try {
    fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
  } catch (error) {
    console.warn("Failed to save progress file:", error);
  }
};

// Create songs with progress
export const createSongsWithProgress = (progressValues: number[]): Song[] => {
  return baseSongs.map((song, index) => ({
    ...song,
    progress: progressValues[index] ?? 0,
  }));
};

export const updateProgress = (currentProgress: number): number => {
  if (currentProgress >= 1.0) {
    return Math.round((Math.random() * 0.2 + 0.1) * 100) / 100;
  }

  const increment = Math.random() * 0.07 + 0.01;
  const newProgress = currentProgress + increment;

  return Math.min(Math.round(newProgress * 100) / 100, 1.0);
};

export const getCurrentSongs = (): Song[] => {
  let currentProgress = loadProgress();
  currentProgress = currentProgress.map(updateProgress);
  saveProgress(currentProgress);
  return createSongsWithProgress(currentProgress);
};
