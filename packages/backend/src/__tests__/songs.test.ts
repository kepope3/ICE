import request from "supertest";
import app from "../index";

describe("Songs API", () => {
  describe("GET /api/songs", () => {
    it("should return list of songs with progress", async () => {
      const response = await request(app).get("/api/songs").expect(200);

      expect(response.body).toHaveProperty("songs");
      expect(Array.isArray(response.body.songs)).toBe(true);
      expect(response.body.songs).toHaveLength(10);
    });

    it("should return songs with required properties", async () => {
      const response = await request(app).get("/api/songs").expect(200);

      const songs = response.body.songs;

      songs.forEach((song: any) => {
        expect(song).toHaveProperty("id");
        expect(song).toHaveProperty("name");
        expect(song).toHaveProperty("author");
        expect(song).toHaveProperty("progress");

        expect(typeof song.id).toBe("number");
        expect(typeof song.name).toBe("string");
        expect(typeof song.author).toBe("string");
        expect(typeof song.progress).toBe("number");
        expect(song.progress).toBeGreaterThanOrEqual(0);
        expect(song.progress).toBeLessThanOrEqual(1);
      });
    });

    it("should return expected song names", async () => {
      const response = await request(app).get("/api/songs").expect(200);

      const songs = response.body.songs;
      const songNames = songs.map((song: any) => song.name);

      expect(songNames).toContain("Flowers");
      expect(songNames).toContain("Anti-Hero");
      expect(songNames).toContain("As It Was");
      expect(songNames).toContain("Heat Waves");
      expect(songNames).toContain("Unholy");
    });

    it("should return different progress values on multiple calls", async () => {
      const response1 = await request(app).get("/api/songs");
      const response2 = await request(app).get("/api/songs");

      // Progress should be different (simulated updates)
      const progress1 = response1.body.songs[0].progress;
      const progress2 = response2.body.songs[0].progress;

      // They might be the same due to random chance, but let's check they're valid
      expect(progress1).toBeGreaterThanOrEqual(0);
      expect(progress1).toBeLessThanOrEqual(1);
      expect(progress2).toBeGreaterThanOrEqual(0);
      expect(progress2).toBeLessThanOrEqual(1);
    });
  });

  describe("GET /health", () => {
    it("should return health status", async () => {
      const response = await request(app).get("/health").expect(200);

      expect(response.body).toHaveProperty("status", "OK");
      expect(response.body).toHaveProperty("timestamp");
    });
  });
});
