import { TableRow, TableCell } from "@/components/ui/table";
import { Employee } from "@/domain";
import { AbsenceConflict } from "@/services/hooks/fetchAbsence";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import { StatusType } from "./Indicators/StatusType";
import { ConflictType } from "./Indicators/ConflictType";


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

  const formatDate = (date: Date) => moment(date).format("MMM D, YYYY");
  return (
    <TableRow className="px-10">
      <TableCell className="font-medium py-[10px]">
        {`${employee.firstName} ${employee.lastName}`}
      </TableCell>
      <TableCell>{formatDate(startDate)}</TableCell>
      <TableCell> {days}</TableCell>
      <TableCell>{absenceType}</TableCell>
      <TableCell className="text-center">
        <StatusType type={approved} />
      </TableCell>
      <TableCell className="text-right">
        <ConflictType conflicts={data?.conflicts} />
      </TableCell>
    </TableRow>
  );
};
