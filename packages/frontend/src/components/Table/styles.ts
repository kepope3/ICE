import styled from "styled-components";

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.1);
`;

export const TableHeader = styled.thead`
  background: #f8f9fa;
`;

export const TableHeaderRow = styled.tr`
  border-bottom: 0.125rem solid #dee2e6;
`;

export const TableHeaderCell = styled.th`
  padding: 1rem 0.75rem;
  text-align: left;
  font-weight: 600;
  color: #495057;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.03125rem;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  border-bottom: 0.0625rem solid #e9ecef;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f8f9fa;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const TableCell = styled.td`
  padding: 1rem 0.75rem;
  vertical-align: middle;
  color: #495057;
  font-size: 0.875rem;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5rem;
  color: #6c757d;
`;

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5rem;
  color: #dc3545;
  background: #f8d7da;
  border: 0.0625rem solid #f5c6cb;
  border-radius: 0.5rem;
  margin: 1.25rem 0;
`;

export const EmptyState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5rem;
  color: #6c757d;
  font-style: italic;
`;
