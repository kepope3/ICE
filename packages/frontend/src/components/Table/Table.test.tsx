import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import Table from "./Table";

interface TestItem {
  id: number;
  name: string;
  value: number;
}

const mockData: TestItem[] = [
  { id: 1, name: "Item 1", value: 100 },
  { id: 2, name: "Item 2", value: 200 },
];

const mockColumns = [
  { key: "id" as keyof TestItem, title: "ID" },
  { key: "name" as keyof TestItem, title: "Name" },
  { key: "value" as keyof TestItem, title: "Value" },
];

describe("Table", () => {
  it("renders data correctly", () => {
    render(<Table data={mockData} columns={mockColumns} />);

    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();
    expect(screen.getByText("200")).toBeInTheDocument();
  });

  it("renders column headers", () => {
    render(<Table data={mockData} columns={mockColumns} />);

    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Value")).toBeInTheDocument();
  });

  it("renders loading state", () => {
    render(<Table data={[]} columns={mockColumns} loading={true} />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders error state", () => {
    render(
      <Table data={[]} columns={mockColumns} error="Something went wrong" />
    );

    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
  });

  it("renders empty state", () => {
    render(
      <Table data={[]} columns={mockColumns} emptyMessage="No items found" />
    );

    expect(screen.getByText("No items found")).toBeInTheDocument();
  });

  it("calls onRowClick when row is clicked", () => {
    const handleRowClick = vi.fn();
    render(
      <Table
        data={mockData}
        columns={mockColumns}
        onRowClick={handleRowClick}
      />
    );

    fireEvent.click(screen.getByText("Item 1").closest("tr")!);
    expect(handleRowClick).toHaveBeenCalledWith(mockData[0]);
  });

  it("renders custom cell content", () => {
    const columnsWithRender = [
      { key: "name" as keyof TestItem, title: "Name" },
      {
        key: "value" as keyof TestItem,
        title: "Value",
        render: (value: number) => `$${value}`,
      },
    ];

    render(<Table data={mockData} columns={columnsWithRender} />);

    expect(screen.getByText("$100")).toBeInTheDocument();
    expect(screen.getByText("$200")).toBeInTheDocument();
  });
});
