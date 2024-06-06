import { getAbsenceConflict, getAllEmployeeAbsence } from "../api";
import { QueryFunctionContext } from "@tanstack/react-query";

/**Fetch absence list */
export const fetchAbsence = async () => {
  const apiRes = await fetch(getAllEmployeeAbsence);

  if (!apiRes.ok) {
    throw new Error(`details fetch not okay`);
  }
  return await apiRes.json();
};

/**Absence conflict */
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
