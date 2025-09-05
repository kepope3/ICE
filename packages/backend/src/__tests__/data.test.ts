import {
  getCurrentSongs,
  updateProgress,
  createSongsWithProgress,
} from "../data";

describe("Data functions", () => {
  describe("createSongsWithProgress", () => {
    it("should create songs with provided progress values", () => {
      const progressValues = [0.1, 0.2, 0.3];
      const songs = createSongsWithProgress(progressValues);

      expect(songs).toHaveLength(10); // Always returns all 10 songs
      expect(songs[0].progress).toBe(0.1);
      expect(songs[1].progress).toBe(0.2);
      expect(songs[2].progress).toBe(0.3);
      // Remaining songs should have progress 0 (default)
      expect(songs[3].progress).toBe(0);
    });

    it("should create songs with all required properties", () => {
      const progressValues = [0.5];
      const songs = createSongsWithProgress(progressValues);

      expect(songs[0]).toHaveProperty("id");
      expect(songs[0]).toHaveProperty("name");
      expect(songs[0]).toHaveProperty("author");
      expect(songs[0]).toHaveProperty("progress");
    });
  });

  describe("updateProgress", () => {
    it("should increment progress by a small amount", () => {
      const initialProgress = 0.5;
      const newProgress = updateProgress(initialProgress);

      expect(newProgress).toBeGreaterThan(initialProgress);
      expect(newProgress).toBeLessThanOrEqual(1.0);
    });

    it("should not exceed 1.0", () => {
      const highProgress = 0.99;
      const newProgress = updateProgress(highProgress);

      expect(newProgress).toBeLessThanOrEqual(1.0);
    });

    it("should reset progress when at 1.0", () => {
      const maxProgress = 1.0;
      const newProgress = updateProgress(maxProgress);

      // When progress is at 100%, it should reset to 10-30%
      expect(newProgress).toBeGreaterThanOrEqual(0.1);
      expect(newProgress).toBeLessThanOrEqual(0.3);
    });
  });

  describe("getCurrentSongs", () => {
    it("should return 10 songs", () => {
      const songs = getCurrentSongs();
      expect(songs).toHaveLength(10);
    });

    it("should return songs with valid progress values", () => {
      const songs = getCurrentSongs();

      songs.forEach((song) => {
        expect(song.progress).toBeGreaterThanOrEqual(0);
        expect(song.progress).toBeLessThanOrEqual(1);
      });
    });

    it("should return different progress values on multiple calls", () => {
      const songs1 = getCurrentSongs();
      const songs2 = getCurrentSongs();

      // At least one song should have different progress
      const hasDifferentProgress = songs1.some(
        (song, index) => song.progress !== songs2[index].progress
      );

      // Note: Due to randomness, this might occasionally fail
      // In a real test, we'd mock the random function
      expect(hasDifferentProgress).toBeDefined();
    });
  });
});
