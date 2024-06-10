// AbsenceTableCell.test.tsx
import { render, screen } from "@testing-library/react";

import { AbsenceTableCell } from "./AbsenceTableCell";
import { Employee } from "@/domain";
import { vi } from "vitest";

vi.mock("@tanstack/react-query", () => ({
  useQuery: vi.fn().mockReturnValue({ data: { conflicts: true } }),
}));

const mockEmployee: Employee = {
  startDate: new Date("2023-01-01"),
  days: 5,
  absenceType: "SICKNESS",
  employee: {
    id: "24a9352b-cf35-4e00-b4c9-403546d7bea8",
    firstName: "John",
    lastName: "Doe",
  },
  approved: true,
};

test("renders employee data correctly", async () => {
  render(
    <AbsenceTableCell
      startDate={mockEmployee?.startDate}
      days={mockEmployee?.days}
      absenceType={mockEmployee?.absenceType}
      employee={mockEmployee?.employee}
      approved={false}
    />
  );

  expect(await screen.findByText("John Doe")).toBeInTheDocument();
  expect(screen.getByText("Jan 1, 2023")).toBeInTheDocument();
  expect(screen.getByText("5")).toBeInTheDocument();
  expect(screen.getByText("SICKNESS")).toBeInTheDocument();
  expect(screen.getByText("disapproved")).toBeInTheDocument();
  expect(screen.getByText("Conflict")).toBeInTheDocument();
});
