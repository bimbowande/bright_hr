import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { useQuery } from "@tanstack/react-query";
import App from "./App";
import { Employee } from "./domain";

// Mock the fetchAbsence function
vi.mock("./services/hooks/fetchAbsence.ts", () => ({
  fetchAbsence: vi.fn(),
}));

// Mock the useQuery hook
vi.mock("@tanstack/react-query", () => ({
  useQuery: vi.fn(),
}));

const mockEmployees: Employee[] = [
  {
    startDate: "2022-05-28T04:39:06.470Z",
    days: 9,
    absenceType: "SICKNESS",
    employee: {
      firstName: "Rahaf",
      lastName: "Deckard",
      id: "2ea05a52-4e31-450d-bbc4-5a6c73167d17",
    },
    approved: true,
  },
  {
    startDate: "2022-02-08T08:02:47.543Z",
    days: 5,
    absenceType: "ANNUAL_LEAVE",
    employee: {
      firstName: "Enya",
      lastName: "Behm",
      id: "84502153-69e6-4561-b2de-8f21f97530d3",
    },
    approved: true,
  },
];

describe("App Component", () => {
  beforeEach(() => {
    // Mock the response of useQuery
    (useQuery as vi.Mock).mockReturnValue({
      data: mockEmployees,
      isLoading: false,
    });
  });

  it("renders the table with employee absences", async () => {
    render(<App />);

    await waitFor(() => {
      expect(
        screen.getByText("A list of Employees Absence.")
      ).toBeInTheDocument();
      expect(screen.getByText("Rahaf")).toBeInTheDocument();
      expect(screen.getByText("Enya")).toBeInTheDocument();
    });
  });

  it("displays loading state", () => {
    (useQuery as vi.Mock).mockReturnValueOnce({
      data: null,
      isLoading: true,
    });

    render(<App />);
    expect(screen.getByText("Loading")).toBeInTheDocument();
  });

  // Add more tests to cover sorting and other functionalities
});
