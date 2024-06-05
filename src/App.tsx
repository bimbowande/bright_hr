import { useQuery } from "@tanstack/react-query";
import { fetchAbsence } from "./services/hooks/fetchAbsence";
import { Table, TableCaption } from "@/components/ui/table";
import { AbsenceHeader } from "./Template/AbsenceHeader";
import { AbsenceTableBody } from "./Template/AbsenceTableBody";

// eslint-disable-next-line react-refresh/only-export-components

export default function App() {
  const { data, isLoading } = useQuery({
    queryKey: ["absence"],
    queryFn: fetchAbsence,
  });

  return (
    <Table>
      <TableCaption>A list of Employees Absence.</TableCaption>
      <AbsenceHeader />
      {!isLoading ? <AbsenceTableBody employees={data} /> : "Loading"}
    </Table>
  );
}
