import { describe, expect, it, vi, beforeEach } from "vitest";
import { AbsenceHeader } from "./AbsenceHeader";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Test suite for Table Header component", () => {
  const sortingUpdate = vi.fn();

  beforeEach(() => {
    render(<AbsenceHeader sortingUpdate={sortingUpdate} />);
  });

  it("render all table header and sorting icon", () => {
    expect(screen.getByText(/Full Name/i)).toBeInTheDocument;
    expect(screen.getByText(/Start Date/i)).toBeInTheDocument();
    expect(screen.getByText(/Days/i)).toBeInTheDocument();
    expect(screen.getByText(/Absence Type/i)).toBeInTheDocument();
    expect(screen.getByText(/Status/i)).toBeInTheDocument();
    expect(screen.getByText(/Conflict/i)).toBeInTheDocument();
    expect(screen.getAllByTestId(/sort_icon_/i).length).toBe(3);
  });

  it("it sorts by name", () => {
    fireEvent.click(screen.getByTestId("sort_icon_name"));
    expect(sortingUpdate).toBeCalledWith("name");
  });
  it("it sorts by date", () => {
    fireEvent.click(screen.getByTestId("sort_icon_date"));
    expect(sortingUpdate).toBeCalledWith("date");
  });
  it("it sorts by absence type ", () => {
    fireEvent.click(screen.getByTestId("sort_icon_type"));
    expect(sortingUpdate).toBeCalledWith("absence_type");
  });
});
