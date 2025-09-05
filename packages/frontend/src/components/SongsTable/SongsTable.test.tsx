import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { vi } from "vitest";
import SongsTable from "./SongsTable";
import { songsApi } from "../../store/api";
import invoicesReducer from "../../store/invoicesSlice";

// Mock store
const createMockStore = () => {
  return configureStore({
    reducer: {
      invoices: invoicesReducer,
      [songsApi.reducerPath]: songsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(songsApi.middleware),
  });
};

// Mock the API response
const mockSongsData = {
  songs: [
    { id: 1, name: "Test Song", author: "Test Artist", progress: 0.5 },
    { id: 2, name: "Another Song", author: "Another Artist", progress: 0.75 },
  ],
};

// Mock the API hook
vi.mock("../../store/api", () => ({
  songsApi: {
    reducerPath: "songsApi",
    reducer: (state = {}) => state,
    middleware: () => (next: any) => (action: any) => next(action),
  },
  useGetSongsQuery: () => ({
    data: mockSongsData,
    error: null,
    isLoading: false,
  }),
}));

const renderWithProvider = (component: React.ReactElement) => {
  const store = createMockStore();
  return render(<Provider store={store}>{component}</Provider>);
};

describe("SongsTable", () => {
  it("renders songs data correctly", () => {
    renderWithProvider(<SongsTable />);

    expect(screen.getByText("Test Song")).toBeInTheDocument();
    expect(screen.getByText("Test Artist")).toBeInTheDocument();
    expect(screen.getByText("Another Song")).toBeInTheDocument();
    expect(screen.getByText("Another Artist")).toBeInTheDocument();
  });

  it("displays progress bars", () => {
    renderWithProvider(<SongsTable />);

    // Check for progress percentages
    expect(screen.getByText("50.0%")).toBeInTheDocument();
    expect(screen.getByText("75.0%")).toBeInTheDocument();
  });

  it("renders issue invoice buttons", () => {
    renderWithProvider(<SongsTable />);

    const buttons = screen.getAllByText("Issue Invoice");
    expect(buttons).toHaveLength(2);
  });

  it("handles invoice button clicks", () => {
    renderWithProvider(<SongsTable />);

    const firstButton = screen.getAllByText("Issue Invoice")[0];
    fireEvent.click(firstButton);

    // Button should still be clickable (no disabled state)
    expect(firstButton).not.toBeDisabled();
  });
});
