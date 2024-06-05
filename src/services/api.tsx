// fetch all employee absence
export const getAllEmployeeAbsence = `https://front-end-kata.brighthr.workers.dev/api/absences`;

// get absence
export const getAbsenceConflict = (id: string) =>
  `https://front-end-kata.brighthr.workers.dev/api/conflict/${id}`;
