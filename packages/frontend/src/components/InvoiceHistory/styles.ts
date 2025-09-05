import styled from "styled-components";

export const Container = styled.div`
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 0.25rem 1.25rem rgba(0, 0, 0, 0.1);
  padding: 1.875rem;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Title = styled.h2`
  margin: 0 0 1.25rem 0;
  color: #495057;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const SongInfo = styled.div`
  font-weight: 600;
  color: #495057;
  font-size: 1rem;
`;

export const AuthorInfo = styled.div`
  color: #6c757d;
  font-size: 0.875rem;
  margin-top: 0.125rem;
`;

export const InvoiceDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: #6c757d;
`;

export const ProgressBadge = styled.span<{ progress: number }>`
  background-color: ${(props) =>
    props.progress < 0.3
      ? "#dc3545"
      : props.progress < 0.7
      ? "#ffc107"
      : "#28a745"};
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
`;

export const DateInfo = styled.div`
  font-size: 0.75rem;
  color: #6c757d;
`;
