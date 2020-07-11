import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeName'
})
export class EmployeeNamePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `The Greatest ${value}`;
  }

}
