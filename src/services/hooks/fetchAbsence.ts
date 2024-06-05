import { EmployeeList } from "@/domain";
import { getAbsenceConflict, getAllEmployeeAbsence } from "../api";
import { QueryFunctionContext } from "@tanstack/react-query";

export const fetchAbsence = async (): Promise<EmployeeList> => {
  const apiRes = await fetch(getAllEmployeeAbsence);

  if (!apiRes.ok) {
    throw new Error(`details fetch not okay`);
  }
  return await apiRes.json();
};

export const AbsenceConflict = async ({
  queryKey,
}: QueryFunctionContext<[string, string]>) => {
  const id = queryKey[1];
  const apiRes = await fetch(getAbsenceConflict(id));
  if (!apiRes.ok) {
    throw new Error(`Conflicts fetch not okay`);
  }
  return await apiRes.json();
};
