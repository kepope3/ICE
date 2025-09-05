# Backend

Express.js API for the music royalty processing system.

## Features

- Single endpoint: `GET /api/songs`
- Dynamic progress simulation with persistence
- Progress resets at 100% to simulate new cycles
- TypeScript throughout
- Jest testing
- CORS enabled

## API

**GET /api/songs** - Returns 10 songs with progress values

**GET /health** - Health check

## Development

```bash
npm install
npm run dev
npm run test
npm run build
npm start
```

## Project Structure

```
src/
├── types.ts
├── data.ts
├── progress.json
├── routes/songs.ts
├── __tests__/
└── index.ts
```

## Progress Simulation

Progress values are stored in `progress.json` and increment by 1-8% on each API call. When a song reaches 100%, it resets to 10-30% to simulate new processing cycles.
