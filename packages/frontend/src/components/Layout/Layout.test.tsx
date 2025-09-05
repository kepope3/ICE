import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { vi } from "vitest";
import Layout from "./Layout";
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

// Mock the API hook
vi.mock("../../store/api", () => ({
  songsApi: {
    reducerPath: "songsApi",
    reducer: (state = {}) => state,
    middleware: () => (next: any) => (action: any) => next(action),
  },
  useGetSongsQuery: () => ({
    data: { songs: [] },
    error: null,
    isLoading: false,
  }),
}));

const renderWithProvider = (component: React.ReactElement) => {
  const store = createMockStore();
  return render(<Provider store={store}>{component}</Provider>);
};

describe("Layout", () => {
  it("renders the main title", () => {
    renderWithProvider(<Layout />);
    expect(screen.getByText("Royalty Processing System")).toBeInTheDocument();
  });

  it("renders the subtitle", () => {
    renderWithProvider(<Layout />);
    expect(
      screen.getByText("Track song progress and issue invoices")
    ).toBeInTheDocument();
  });

  it("renders the songs section title", () => {
    renderWithProvider(<Layout />);
    expect(screen.getByText("Songs Progress")).toBeInTheDocument();
  });

  it("renders the invoice history title", () => {
    renderWithProvider(<Layout />);
    expect(screen.getByText("Invoice History")).toBeInTheDocument();
  });
});
