export interface Song {
  id: number;
  name: string;
  author: string;
  progress: number;
}

export interface SongsResponse {
  songs: Song[];
}

export interface InvoiceData {
  id: string;
  songId: number;
  songName: string;
  author: string;
  progress: number;
  issuedAt: string;
}
