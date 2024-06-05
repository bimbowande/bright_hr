import { TableRow, TableCell } from "@/components/ui/table";
import { Employee } from "@/domain";
import { AbsenceConflict } from "@/services/hooks/fetchAbsence";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";

export const AbsenceTableCell = ({
  startDate,
  days,
  absenceType,
  employee,
  approved,
}: Employee) => {
  const { data } = useQuery({
    queryKey: ["Employee Conflict", employee.id],
    queryFn: AbsenceConflict,
  });
  const isConflict: { conflicts: boolean } = data?.conflicts;
  const formatDate = (date: Date) => moment(date).format("MMM D, YYYY");
  return (
    <TableRow>
      <TableCell className="font-medium">
        {`${employee.firstName} ${employee.lastName}`}
      </TableCell>
      <TableCell>{formatDate(startDate)}</TableCell>
      <TableCell> {days}</TableCell>
      <TableCell>{absenceType}</TableCell>
      <TableCell className="text-right">
        {approved ? "Approved" : "Disapproved"}
      </TableCell>
      <TableCell className="text-right">
        {isConflict ? "true" : "false"}
      </TableCell>
    </TableRow>
  );
};
