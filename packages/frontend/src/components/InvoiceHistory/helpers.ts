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
