import React from "react";
import { useGetSongsQuery } from "../../store/api";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addInvoice } from "../../store/invoicesSlice";
import { SongWithInvoice } from "../../types";
import Table, { Column } from "../Table/Table";
import {
  createInvoice,
  scrollToInvoiceHistory,
  shouldShowGoToInvoices,
} from "./helpers";
import * as S from "./styles";

const SongsTable: React.FC = () => {
  const { data, error, isLoading } = useGetSongsQuery(undefined, {
    pollingInterval: 5000,
  });
  const dispatch = useAppDispatch();
  const invoices = useAppSelector((state) => state.invoices.invoices);

  const handleIssueInvoice = (song: SongWithInvoice) => {
    const invoice = createInvoice(song);
    dispatch(addInvoice(invoice));

    if (window.innerWidth <= 768) {
      setTimeout(() => {
        scrollToInvoiceHistory();
      }, 100);
    }
  };

  const handleGoToInvoices = () => {
    scrollToInvoiceHistory();
  };

  const getSongWithInvoice = (song: SongWithInvoice): SongWithInvoice => {
    const lastInvoice = invoices.find((inv) => inv.songId === song.id);
    return {
      ...song,
      lastInvoiceDate: lastInvoice?.issuedAt,
      lastInvoiceProgress: lastInvoice?.progress,
    };
  };

  const columns: Column<SongWithInvoice>[] = [
    {
      key: "id",
      title: "ID",
      width: "80px",
    },
    {
      key: "name",
      title: "Song Name",
    },
    {
      key: "author",
      title: "Author",
    },
    {
      key: "progress",
      title: "Progress",
      width: "200px",
      render: (progress: number, song: SongWithInvoice) => {
        const songWithInvoice = getSongWithInvoice(song);
        return (
          <S.ProgressContainer>
            <S.ProgressBar progress={progress} />
            <S.ProgressText>{(progress * 100).toFixed(1)}%</S.ProgressText>
            {songWithInvoice.lastInvoiceDate && (
              <S.InvoiceInfo>
                Last invoice:{" "}
                {new Date(songWithInvoice.lastInvoiceDate).toLocaleString()}
                <br />
                Progress:{" "}
                {(songWithInvoice.lastInvoiceProgress! * 100).toFixed(1)}%
              </S.InvoiceInfo>
            )}
          </S.ProgressContainer>
        );
      },
    },
    {
      key: "action",
      title: "Action",
      width: "120px",
      align: "center",
      render: (_, song: SongWithInvoice) => (
        <S.Button onClick={() => handleIssueInvoice(song)}>
          Issue Invoice
        </S.Button>
      ),
    },
  ];

  return (
    <>
      {shouldShowGoToInvoices(invoices) && (
        <S.MobileGoToInvoices>
          <S.GoToInvoicesButton onClick={handleGoToInvoices}>
            📄 Go to Invoices ({invoices.length})
          </S.GoToInvoicesButton>
        </S.MobileGoToInvoices>
      )}
      <Table
        data={data?.songs ?? []}
        columns={columns}
        loading={isLoading}
        error={error ? "Error loading songs. Please try again." : null}
        emptyMessage="No songs available"
      />
    </>
  );
};

export default SongsTable;
