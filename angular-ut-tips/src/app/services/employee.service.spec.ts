import {TestBed} from '@angular/core/testing';

import {EmployeeService} from './employee.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {employeeHttpResponse, employeesListSample} from "../../mocks/employees/mock";
import {take} from "rxjs/operators";

describe('EmployeeService', () => {
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

  afterEach(() => {
    // Verify that no unmatched requests are outstanding.
    http.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should properly call to the getEmployees', () => {
    service.getEmployeesList().pipe(take(1)).subscribe((employeeList) => {
      expect(employeeList).toEqual(employeesListSample);
    })

    const request = http.expectOne('http://dummy.restapiexample.com/api/v1/employees');
    request.flush(employeeHttpResponse);
    expect(request.request.method).toEqual('GET');
  });
});
