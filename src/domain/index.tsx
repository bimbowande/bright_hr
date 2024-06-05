export interface IEmployeeDetails {
  firstName: string;
  lastName: string;
  id: string;
}

export type Employee = {
  startDate: Date;
  days: number;
  absenceType: "SICKNESS" | "ANNUAL_LEAVE" | "MEDICAL";
  employee: IEmployeeDetails;
  approved: boolean;
};

export interface EmployeeList {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  employees: Employee[] | any;
}
