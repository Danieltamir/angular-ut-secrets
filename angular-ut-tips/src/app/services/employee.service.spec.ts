import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {employeeHttpResponse, employeeListSample} from "../../mocks/employees/mock";

fdescribe('EmployeeService', () => {
  let service: EmployeeService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmployeeService]
    });

    service = TestBed.inject(EmployeeService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should ', () => {
    service.getEmployeesList().subscribe((employeesList) => {
      expect(employeesList).toEqual(employeeListSample);
    });

    const request = http.expectOne('http://dummy.restapiexample.com/api/v1/employees');
    request.flush(employeeHttpResponse);
    expect(request.request.method).toBe('GET');
  });
});
