import { TableBody } from "@/components/ui/table";

import { AbsenceTableCell } from "./AbsenceTableCell";
import { Employee, EmployeeList } from "@/domain";

export const AbsenceTableBody = ({ employees }: EmployeeList) => {
  return (
    <TableBody>
      {employees.map((emp: Employee, i: number) => (
        <AbsenceTableCell
          key={i}
          startDate={emp.startDate}
          days={emp.days}
          absenceType={emp.absenceType}
          employee={emp.employee}
          approved={emp.approved}
        />
      ))}
    </TableBody>
  );
};
