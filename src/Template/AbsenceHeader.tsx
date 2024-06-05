import { TableHeader, TableRow, TableHead } from "@/components/ui/table";

export const AbsenceHeader = () => {
  return (
    <TableHeader>
      <TableRow>
        <TableHead className="w-[150px]">Full Name</TableHead>
        <TableHead>Start Date</TableHead>
        <TableHead>Days</TableHead>
        <TableHead>Absence Type</TableHead>
        <TableHead className="text-right">Status</TableHead>
        <TableHead className="text-right">Conflict</TableHead>
      </TableRow>
    </TableHeader>
  );
};
