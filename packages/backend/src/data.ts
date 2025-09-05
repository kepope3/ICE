import { Song } from "./types";

// Base song data
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

// Initial progress values (as specified in requirements)
const initialProgress = [
  0.15, 0.27, 0.12, 0.38, 0.03, 0.1, 0.35, 0.58, 0.41, 0.32,
];

// Create songs with initial progress
export const createSongsWithProgress = (progressValues: number[]): Song[] => {
  return baseSongs.map((song, index) => ({
    ...song,
    progress: progressValues[index] ?? 0,
  }));
};

export const updateProgress = (currentProgress: number): number => {
  // Generate a random increment to simulate progress changes
  const increment = Math.random() * 0.04 + 0.01;
  const newProgress = currentProgress + increment;

  // Cap at 1.0 (100%) and round to 2 decimal places
  return Math.min(Math.round(newProgress * 100) / 100, 1.0);
};

export const getCurrentSongs = (): Song[] => {
  // In a real app, this would come from a database
  // For now, we simulate progress by generating random values each time
  const currentProgress = initialProgress.map(updateProgress);
  return createSongsWithProgress(currentProgress);
};
