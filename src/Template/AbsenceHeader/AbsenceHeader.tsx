import { TableHeader, TableRow, TableHead } from "@/components/ui/table";
import { ArrowDownUp } from "lucide-react";

export const AbsenceHeader = ({
  sortingUpdate,
}: {
  sortingUpdate: (name: string) => void;
}) => {
  return (
    <TableHeader>
      <TableRow>
        <TableHead className="w-[150px]">
          Full Name{" "}
          <ArrowDownUp
            data-testid="sort_icon_name"
            id="sort_icon_name"
            onClick={() => sortingUpdate("name")}
            className="inline"
            size={20}
          />
        </TableHead>
        <TableHead>
          Start Date
          <ArrowDownUp
            data-testid="sort_icon_date"
            id="sort_icon_date"
            className="inline"
            size={20}
            onClick={() => sortingUpdate("date")}
          />
        </TableHead>
        <TableHead>Days</TableHead>
        <TableHead>
          Absence Type{" "}
          <ArrowDownUp
            data-testid="sort_icon_type"
            id="sort_icon_type"
            onClick={() => sortingUpdate("absence_type")}
            className="inline"
            size={20}
          />
        </TableHead>
        <TableHead className="text-center">Status</TableHead>
        <TableHead className="text-right w-[120px]">Conflict</TableHead>
      </TableRow>
    </TableHeader>
  );
};
