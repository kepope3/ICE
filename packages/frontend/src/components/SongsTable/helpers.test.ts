import { describe, it, expect, vi } from "vitest";
import { createInvoice, shouldShowGoToInvoices } from "./helpers";

// Mock window.innerWidth
Object.defineProperty(window, "innerWidth", {
  writable: true,
  configurable: true,
  value: 1024,
});

describe("SongsTable helpers", () => {
  describe("createInvoice", () => {
    it("should create an invoice with correct structure", () => {
      const mockSong = {
        id: 1,
        name: "Test Song",
        author: "Test Artist",
        progress: 0.5,
      };

      const invoice = createInvoice(mockSong);

      expect(invoice).toHaveProperty("id");
      expect(invoice).toHaveProperty("songId", 1);
      expect(invoice).toHaveProperty("songName", "Test Song");
      expect(invoice).toHaveProperty("author", "Test Artist");
      expect(invoice).toHaveProperty("progress", 0.5);
      expect(invoice).toHaveProperty("issuedAt");
      expect(typeof invoice.issuedAt).toBe("string");
    });

    it("should generate unique IDs", () => {
      const mockSong = { id: 1, name: "Test", author: "Artist", progress: 0.5 };

      const invoice1 = createInvoice(mockSong);
      const invoice2 = createInvoice(mockSong);

      expect(invoice1.id).not.toBe(invoice2.id);
    });
  });

  describe("shouldShowGoToInvoices", () => {
    it("should return true on mobile with invoices", () => {
      Object.defineProperty(window, "innerWidth", { value: 768 });
      const invoices = [
        {
          id: "1",
          songId: 1,
          songName: "Test",
          author: "Artist",
          progress: 0.5,
          issuedAt: "2023-01-01",
        },
      ];

      expect(shouldShowGoToInvoices(invoices)).toBe(true);
    });

    it("should return false on desktop", () => {
      Object.defineProperty(window, "innerWidth", { value: 1024 });
      const invoices = [
        {
          id: "1",
          songId: 1,
          songName: "Test",
          author: "Artist",
          progress: 0.5,
          issuedAt: "2023-01-01",
        },
      ];

      expect(shouldShowGoToInvoices(invoices)).toBe(false);
    });

    it("should return false with no invoices", () => {
      Object.defineProperty(window, "innerWidth", { value: 768 });

      expect(shouldShowGoToInvoices([])).toBe(false);
    });
  });
});
