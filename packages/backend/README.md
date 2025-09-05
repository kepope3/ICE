# Royalty Processing Backend

Express.js backend for the royalty processing system with TypeScript.

## Features

- **Single Endpoint**: `GET /api/songs` - Returns list of 10 songs with dynamic progress
- **Dynamic Progress**: Progress values increment over time to simulate real calculation updates
- **TypeScript**: Full type safety throughout
- **Testing**: Jest test suite with comprehensive coverage
- **CORS**: Enabled for frontend communication

## API Endpoints

### GET /api/songs

Returns a list of 10 songs with current progress values.

**Response:**

```json
{
  "songs": [
    {
      "id": 1,
      "name": "Flowers",
      "author": "Miley Cyrus",
      "progress": 0.15
    }
    // ... 9 more songs
  ]
}
```

### GET /health

Health check endpoint.

**Response:**

```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── types.ts          # TypeScript interfaces
├── data.ts           # Song data and progress simulation
├── routes/
│   └── songs.ts      # Songs API routes
├── __tests__/
│   ├── songs.test.ts # API endpoint tests
│   └── data.test.ts  # Data function tests
└── index.ts          # Express app setup
```

## Progress Simulation

The progress values are simulated to show dynamic changes:

- Each API call generates random progress values based on initial values
- Progress is capped at 1.0 (100%) and rounded to 2 decimal places
- Random increments between 0.01 and 0.05 per call
- Server is stateless - each call generates fresh progress values
- This simulates real-time calculation updates for the frontend polling
