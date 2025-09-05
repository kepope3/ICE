import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import InvoiceHistory from "./InvoiceHistory";
import invoicesReducer from "../../store/invoicesSlice";

// Mock store
const createMockStore = () => {
  return configureStore({
    reducer: {
      invoices: invoicesReducer,
    },
  });
};

const renderWithProvider = (component: React.ReactElement) => {
  const store = createMockStore();
  return render(<Provider store={store}>{component}</Provider>);
};

describe("InvoiceHistory", () => {
  it("renders empty state when no invoices", () => {
    renderWithProvider(<InvoiceHistory />);
    expect(
      screen.getByText(
        "No invoices issued yet. Click 'Issue Invoice' on a song to get started."
      )
    ).toBeInTheDocument();
  });

  it("renders invoice history title", () => {
    renderWithProvider(<InvoiceHistory />);
    expect(screen.getByText("Invoice History")).toBeInTheDocument();
  });
});
