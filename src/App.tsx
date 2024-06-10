import { useQuery } from "@tanstack/react-query";
import { fetchAbsence } from "./services/hooks/fetchAbsence";
import { Table, TableCaption } from "@/components/ui/table";
import { AbsenceHeader } from "./Template/AbsenceHeader/AbsenceHeader";
import { AbsenceTableBody } from "./Template/AbsenceTableBody";
import { useCallback, useEffect, useState } from "react";
import { Employee } from "./domain";

export default function App() {
  const [sortCriteria, updateCriteria] = useState<string | null>();
  const [sortedList, updateSortedList] = useState<Employee[]>([]);
  const { data, isLoading } = useQuery({
    queryKey: ["absence"],
    queryFn: fetchAbsence,
  });

  const sortList = useCallback(
    (val: string) => {
      const sortedData = [...data].sort((a, b) => {
        switch (val) {
          case "absence_type":
            return a.absenceType.localeCompare(b.absenceType);
          case "date":
            return (
              new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
            );
          case "name":
            return a.employee.firstName.localeCompare(b.employee.firstName);
          default:
            return data;
        }
      });
      updateSortedList(sortedData);
      updateCriteria(val);
    },
    [data]
  );

  useEffect(() => {
    if (sortCriteria) {
      sortList(sortCriteria);
    }
  }, [sortCriteria, sortList]);

  return (
    <div className="mx-[40px]">
      <Table>
        <TableCaption>A list of Employees Absence.</TableCaption>
        <AbsenceHeader sortingUpdate={sortList} />
        {!isLoading ? (
          <AbsenceTableBody employees={sortedList.length ? sortedList : data} />
        ) : (
          "Loading"
        )}
      </Table>
    </div>
  );
}
