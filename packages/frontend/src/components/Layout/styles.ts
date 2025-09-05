import styled from "styled-components";

export const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1.25rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 0.625rem;
  }

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    z-index: -1;
  }
`;

export const MainContent = styled.div`
  max-width: 75rem;
  margin: 0 auto;
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 2.5rem;
  color: white;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin: 0 0 0.625rem 0;
  font-weight: 700;
  text-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  margin: 0;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ContentGrid = styled.div`
  display: flex;
  gap: 1.875rem;
  min-height: calc(100vh - 12.5rem);

  @media (max-width: 1100px) {
    flex-direction: column;
    min-height: auto;
  }
`;

export const SongsSection = styled.section`
  background: white;
  border-radius: 0.75rem;
  padding: 1.875rem;
  box-shadow: 0 0.25rem 1.25rem rgba(0, 0, 0, 0.1);
  flex: 1;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 1.25rem;
  }

  @media (max-width: 480px) {
    padding: 0.9375rem;
  }
`;

export const InvoiceSection = styled.section`
  width: 25rem;
  flex-shrink: 0;

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const SectionTitle = styled.h2`
  margin: 0 0 1.25rem 0;
  color: #495057;
  font-size: 1.75rem;
  font-weight: 600;
`;
