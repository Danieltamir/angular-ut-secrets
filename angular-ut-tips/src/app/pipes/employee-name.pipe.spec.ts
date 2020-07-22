import {EmployeeNamePipe} from "./employee-name.pipe";

describe('EmployeeNamePipe', () => {

  it('should properly transform the value', function () {
    const enp = new EmployeeNamePipe();

    const transformedValue = enp.transform('Angular');

    expect(transformedValue).toEqual('Angular Rocks!');
  });

})
