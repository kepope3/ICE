# Frontend

React app for the music royalty processing system.

## Features

- Real-time progress tracking with polling
- Invoice management system
- Responsive design
- TypeScript throughout
- Redux Toolkit + RTK Query
- Styled Components

## Tech Stack

React 18, TypeScript, Redux Toolkit, RTK Query, React Router, Styled Components, Vite, Vitest

## Components

**SongsTable** - Displays songs with progress bars and invoice functionality

**InvoiceHistory** - Shows all issued invoices with details

## State Management

RTK Query handles API calls and caching. Redux slices manage invoice state. Polling refreshes data every 5 seconds.

## Development

```bash
npm install
npm run dev
npm run test
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
├── store/
├── types/
├── test/
├── App.tsx
├── main.tsx
└── index.css
```

## API Integration

Base URL `/api` is proxied to backend. Polling every 5 seconds for fresh data.

## Styling

Styled Components with responsive design and progress-based color coding.
