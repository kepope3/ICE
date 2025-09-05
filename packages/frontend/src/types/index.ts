// Song types matching the backend
export interface Song {
  id: number;
  name: string;
  author: string;
  progress: number;
}

export interface SongsResponse {
  songs: Song[];
}

// Invoice types for the frontend state
export interface Invoice {
  id: string;
  songId: number;
  songName: string;
  author: string;
  progress: number;
  issuedAt: string;
}

// UI state types
export interface SongWithInvoice extends Song {
  lastInvoiceDate?: string;
  lastInvoiceProgress?: number;
}

// API base URL
export const API_BASE_URL = "/api";
