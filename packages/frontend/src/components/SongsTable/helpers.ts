import { Invoice } from "../../types";

export const createInvoice = (song: any): Invoice => {
  return {
    id: `${song.id}-${Date.now()}`,
    songId: song.id,
    songName: song.name,
    author: song.author,
    progress: song.progress,
    issuedAt: new Date().toISOString(),
  };
};

export const scrollToInvoiceHistory = () => {
  const invoiceSection = document.querySelector(
    '[data-testid="invoice-history"]'
  );
  if (invoiceSection) {
    invoiceSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export const shouldShowGoToInvoices = (invoices: Invoice[]): boolean => {
  return window.innerWidth <= 768 && invoices.length > 0;
};
