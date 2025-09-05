import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Invoice } from "../types";

interface InvoicesState {
  invoices: Invoice[];
}

const initialState: InvoicesState = {
  invoices: [],
};

export const invoicesSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {
    addInvoice: (state, action: PayloadAction<Invoice>) => {
      state.invoices = [action.payload, ...state.invoices]; // Add to beginning of array
    },
    clearInvoices: (state) => {
      state.invoices = [];
    },
  },
});

export const { addInvoice, clearInvoices } = invoicesSlice.actions;
export default invoicesSlice.reducer;
