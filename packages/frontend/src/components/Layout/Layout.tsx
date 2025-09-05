import React from "react";
import SongsTable from "../SongsTable/SongsTable";
import InvoiceHistory from "../InvoiceHistory/InvoiceHistory";
import * as S from "./styles";

const Layout: React.FC = () => {
  return (
    <S.AppContainer>
      <S.MainContent>
        <S.Header>
          <S.Title>Royalty Processing System</S.Title>
          <S.Subtitle>Track song progress and issue invoices</S.Subtitle>
        </S.Header>

        <S.ContentGrid>
          <S.SongsSection>
            <S.SectionTitle>Songs Progress</S.SectionTitle>
            <SongsTable />
          </S.SongsSection>

          <S.InvoiceSection>
            <InvoiceHistory />
          </S.InvoiceSection>
        </S.ContentGrid>
      </S.MainContent>
    </S.AppContainer>
  );
};

export default Layout;
