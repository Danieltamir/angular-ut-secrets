import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {
  }

  public getEmployeesList(): Observable<any[]> {
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees').pipe(map((returnedObject: any) => returnedObject.data));
  }

  public deleteEmployee(employeeIndex: number) {
    return this.http.delete(`http://dummy.restapiexample.com/api/v1/delete/${employeeIndex}`);
  }
}
