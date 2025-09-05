import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1.25rem 0;
  background: white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0.125rem 0.625rem rgba(0, 0, 0, 0.1);
`;

export const TableHeader = styled.th`
  background: #f8f9fa;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #495057;
  border-bottom: 0.125rem solid #dee2e6;
`;

export const TableCell = styled.td`
  padding: 1rem;
  border-bottom: 0.0625rem solid #dee2e6;
  vertical-align: middle;
`;

export const TableRow = styled.tr`
  &:hover {
    background-color: #f8f9fa;
  }
`;

export const ProgressBar = styled.div<{ progress: number }>`
  width: 6.25rem;
  height: 0.5rem;
  background-color: #e9ecef;
  border-radius: 0.25rem;
  overflow: hidden;

  &::after {
    content: "";
    display: block;
    width: ${(props) => props.progress * 100}%;
    height: 100%;
    background-color: ${(props) =>
      props.progress < 0.3
        ? "#dc3545"
        : props.progress < 0.7
        ? "#ffc107"
        : "#28a745"};
    transition: width 0.3s ease;
  }
`;

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const ProgressText = styled.span`
  font-size: 0.875rem;
  color: #6c757d;
  margin-left: 0.5rem;
`;

export const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 0.875rem;
  transition: background-color 0.2s;

  &:hover {
    background: #0056b3;
  }

  &:disabled {
    background: #6c757d;
    cursor: not-allowed;
  }
`;

export const InvoiceInfo = styled.div`
  font-size: 0.75rem;
  color: #6c757d;
  margin-top: 0.25rem;
`;

export const LoadingSpinner = styled.div`
  text-align: center;
  padding: 2.5rem;
  color: #6c757d;
`;

export const ErrorMessage = styled.div`
  text-align: center;
  padding: 2.5rem;
  color: #dc3545;
  background: #f8d7da;
  border: 0.0625rem solid #f5c6cb;
  border-radius: 0.25rem;
  margin: 1.25rem 0;
`;

export const MobileGoToInvoices = styled.div`
  display: none;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const GoToInvoicesButton = styled.button`
  background: linear-gradient(135deg, #28a745, #20c997);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  box-shadow: 0 0.25rem 0.75rem rgba(40, 167, 69, 0.3);
  transition: all 0.3s ease;
  animation: slideInFromTop 0.3s ease-out;

  &:hover {
    background: linear-gradient(135deg, #218838, #1ea085);
    transform: translateY(-0.125rem);
    box-shadow: 0 0.375rem 1rem rgba(40, 167, 69, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  @keyframes slideInFromTop {
    0% {
      opacity: 0;
      transform: translateY(-1rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
