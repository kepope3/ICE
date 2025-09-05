import React from "react";
import { useAppSelector } from "../../store/hooks";
import { Invoice } from "../../types";
import Table, { Column } from "../Table/Table";
import * as S from "./styles";

const InvoiceHistory: React.FC = () => {
  const invoices = useAppSelector((state) => state.invoices.invoices);

  const columns: Column<Invoice>[] = [
    {
      key: "songName",
      title: "Song",
      width: "200px",
      render: (songName: string, invoice: Invoice) => (
        <S.SongInfo>
          <div>{songName}</div>
          <S.AuthorInfo>by {invoice.author}</S.AuthorInfo>
        </S.SongInfo>
      ),
    },
    {
      key: "progress",
      title: "Progress",
      width: "120px",
      align: "center",
      render: (progress: number) => (
        <S.ProgressBadge progress={progress}>
          {(progress * 100).toFixed(1)}%
        </S.ProgressBadge>
      ),
    },
    {
      key: "issuedAt",
      title: "Issued",
      width: "180px",
      render: (issuedAt: string, invoice: Invoice) => (
        <S.InvoiceDetails>
          <S.DateInfo>{new Date(issuedAt).toLocaleString()}</S.DateInfo>
          <S.DateInfo>ID: {invoice.songId}</S.DateInfo>
        </S.InvoiceDetails>
      ),
    },
  ];

  return (
    <S.Container data-testid="invoice-history">
      <S.Title>Invoice History</S.Title>
      <Table
        data={invoices}
        columns={columns}
        emptyMessage="No invoices issued yet. Click 'Issue Invoice' on a song to get started."
      />
    </S.Container>
  );
};

export default InvoiceHistory;
