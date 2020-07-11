import {Observable, of} from "rxjs";
import {IEmployee} from "../../app/models/employee.model";

export const employeeListSample = [
  {
    employee_age: '29',
    employee_name: 'Daniel',
    employee_salary: '1000',
    id: '1',
    profile_image: 'image'
  },
  {
    employee_age: '1.5',
    employee_name: 'Omer',
    employee_salary: '10000',
    id: '2',
    profile_image: 'image'
  },
];

export const employeeHttpResponse = {
  data: employeeListSample,
  status: "success"
}

export class EmployeesServiceMock {
  getEmployeesList(): Observable<IEmployee[]> {
    return of(employeeListSample)
  }

  deleteEmployee(employeeIndex: number) {
    return of({});
  }
}
