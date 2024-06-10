import { describe, expect, it, vi, beforeEach } from "vitest";
import { AbsenceHeader } from "./AbsenceHeader";
import { render, screen } from "@testing-library/react";

describe("Test suite for Table Header component", () => {
  const sortingUpdate = vi.fn();

  beforeEach(() => {
    render(<AbsenceHeader sortingUpdate={sortingUpdate} />);
    screen.debug();
  });

  it("render all table header and sorting icon", () => {
    expect(screen.getByText(/Full Name/i)).toBeInTheDocument;
    expect(screen.getByText(/Start Date/i)).toBeInTheDocument();
    expect(screen.getByText(/Days/i)).toBeInTheDocument();
    expect(screen.getByText(/Absence Type/i)).toBeInTheDocument();
    expect(screen.getByText(/Status/i)).toBeInTheDocument();
    expect(screen.getByText(/Conflict/i)).toBeInTheDocument();
  });
});
