import React from "react";
import * as S from "./styles";

export interface Column<T> {
  key: keyof T | string;
  title: string;
  render?: (value: any, item: T) => React.ReactNode;
  width?: string;
  align?: "left" | "center" | "right";
}

export interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  error?: string | null;
  emptyMessage?: string;
  onRowClick?: (item: T) => void;
  className?: string;
}

function Table<T extends Record<string, any>>({
  data,
  columns,
  loading = false,
  error = null,
  emptyMessage = "No data available",
  onRowClick,
  className,
}: TableProps<T>) {
  if (loading) {
    return (
      <S.TableContainer className={className}>
        <S.LoadingContainer>Loading...</S.LoadingContainer>
      </S.TableContainer>
    );
  }

  if (error) {
    return (
      <S.TableContainer className={className}>
        <S.ErrorContainer>{error}</S.ErrorContainer>
      </S.TableContainer>
    );
  }

  if (data.length === 0) {
    return (
      <S.TableContainer className={className}>
        <S.EmptyState>{emptyMessage}</S.EmptyState>
      </S.TableContainer>
    );
  }

  return (
    <S.TableContainer className={className}>
      <S.Table>
        <S.TableHeader>
          <S.TableHeaderRow>
            {columns.map((column) => (
              <S.TableHeaderCell
                key={String(column.key)}
                style={{
                  width: column.width,
                  textAlign: column.align || "left",
                }}
              >
                {column.title}
              </S.TableHeaderCell>
            ))}
          </S.TableHeaderRow>
        </S.TableHeader>
        <S.TableBody>
          {data.map((item, index) => (
            <S.TableRow
              key={index}
              onClick={() => onRowClick?.(item)}
              style={{ cursor: onRowClick ? "pointer" : "default" }}
            >
              {columns.map((column) => (
                <S.TableCell
                  key={String(column.key)}
                  style={{ textAlign: column.align || "left" }}
                >
                  {column.render
                    ? column.render(item[column.key], item)
                    : item[column.key]}
                </S.TableCell>
              ))}
            </S.TableRow>
          ))}
        </S.TableBody>
      </S.Table>
    </S.TableContainer>
  );
}

export default Table;
