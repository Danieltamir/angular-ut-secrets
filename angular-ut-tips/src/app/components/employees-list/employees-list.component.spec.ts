import {async, ComponentFixture, fakeAsync, flush, TestBed, tick} from '@angular/core/testing';

import { EmployeesListComponent } from './employees-list.component';
import {EmployeeService} from "../../services/employee.service";
import {employeeListSample, EmployeesServiceMock} from "../../../mocks/employees/mock";
import {EmployeeNamePipe} from "../../pipes/employee-name.pipe";
import {IEmployee} from "../../models/employee.model";
import {By} from "@angular/platform-browser";

fdescribe('EmployeesListComponent', () => {
  let component: EmployeesListComponent;
  let fixture: ComponentFixture<EmployeesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesListComponent, EmployeeNamePipe ],
      providers: [
        {provide: EmployeeService, useClass: EmployeesServiceMock}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should properly generate employee-container element for each employee fetched', () => {
      const employeesElements = fixture.nativeElement.querySelectorAll('.employee-container');

      expect(employeesElements.length).toEqual(2);
  });

  it('should properly log the employee deleted after clicking on delete',  fakeAsync(() => {
    const expectedLoggedEmployee: IEmployee = employeeListSample[0];
    spyOn(console,'log');

    component.deleteEmployee(employeeListSample[0],0);
    // flush();
    tick(2000);

    expect(console.log).toHaveBeenCalledWith('Emoloyee deleted',expectedLoggedEmployee.employee_name);
  }));

  it('should properly open the add new employee modal when on openNewEmployeeModal', () => {
    const openNewEmployeeModalSelector = '.employee-columns-header .btn';
    const openNewEmployeeModalElement = fixture.debugElement.query(By.css(openNewEmployeeModalSelector));
    spyOn(window, 'alert');

    openNewEmployeeModalElement.triggerEventHandler('click',{});

    expect(window.alert).toHaveBeenCalledWith('Imagine a new employee modal is opened! 😱');
  });
});
