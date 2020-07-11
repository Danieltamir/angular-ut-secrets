import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../../services/employee.service";
import {Observable} from "rxjs";
import {IEmployee} from "../../models/employee.model";

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  employees$: Observable<IEmployee[]>;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.employees$ = this.employeeService.getEmployeesList();
  }

  deleteEmployee(employee, employeeIndex: number) {
    this.employeeService.deleteEmployee(employeeIndex).subscribe(() => {
      setTimeout(() => {
        console.log('Emoloyee deleted', employee.employee_name)
      }, 2000)
    });
  }

  openNewEmployeeModal() {
    alert('Imagine a new employee modal is opened! 😱');
  }
}
