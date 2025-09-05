# Music Royalty Processing System

A take-home assignment for a Senior Frontend Engineer position. Built with React, TypeScript, and Express.js to track song progress and manage royalty invoices.

## Features

- Real-time progress tracking with polling
- Invoice management system
- Responsive design for mobile and desktop
- TypeScript throughout
- Redux Toolkit for state management
- Testing with Jest and Vitest

## Architecture

### Backend

- Express.js with TypeScript
- Single endpoint: `GET /api/songs`
- Dynamic progress simulation
- CORS enabled
- Jest testing

### Frontend

- React with TypeScript
- Redux Toolkit + RTK Query
- Styled Components
- Polling every 5 seconds
- React Testing Library

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Running

```bash
# Start both servers
npm run dev

# Or start individually
npm run dev:backend  # port 3001
npm run dev:frontend # port 3000
```

### Access

- Frontend: http://localhost:3000
- Backend: http://localhost:3001/api/songs

### Testing

```bash
npm run test              # all tests
npm run test:backend      # backend only
npm run test:frontend     # frontend only
```

## Project Structure

```
packages/
├── backend/              # Express API
│   ├── src/
│   │   ├── routes/
│   │   ├── __tests__/
│   │   ├── data.ts
│   │   └── index.ts
│   └── package.json
└── frontend/             # React app
    ├── src/
    │   ├── components/
    │   ├── store/
    │   ├── types/
    │   └── test/
    └── package.json
```

## How It Works

The backend simulates royalty processing by generating random progress values for each song. Progress increments by 1-8% on each API call and resets to 10-30% when it reaches 100%.

The frontend polls the backend every 5 seconds to get updated progress values. Users can click "Issue Invoice" to capture the current progress and add it to the invoice history.

## Tech Stack

**Backend:** Express.js, TypeScript, Jest, CORS

**Frontend:** React 18, TypeScript, Redux Toolkit, RTK Query, React Router, Styled Components, Vitest, Vite

## API

**GET /api/songs** - Returns 10 songs with progress values

**GET /health** - Health check

## Testing

Backend uses Jest, frontend uses Vitest + React Testing Library.

## Build

```bash
npm run build
```
