import { EmployeeNamePipe } from './employee-name.pipe';

fdescribe('EmployeeNamePipe', () => {
  it('create an instance', () => {
    const pipe = new EmployeeNamePipe();
    expect(pipe).toBeTruthy();
  });

  // No need for TestBed configuration etc.

  it('should properly transform a value', () => {
    const pipe = new EmployeeNamePipe();

    const transformedValue = pipe.transform('Angular');

    expect(transformedValue).toEqual('The Greatest Angular');
  });
});
