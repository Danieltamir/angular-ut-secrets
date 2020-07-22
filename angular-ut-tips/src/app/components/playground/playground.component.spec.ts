import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {PlaygroundComponent} from './playground.component';
import {By} from "@angular/platform-browser";

describe('PlaygroundComponent', () => {
  let component: PlaygroundComponent;
  let fixture: ComponentFixture<PlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlaygroundComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Spies!', () => {

    it('Spies unit tests playground', () => {
      // AAA - Arrange Act Assert
      // Arrange
      component.companyName = null;
      spyOn(component, 'beingCalledFirst').and.callThrough();
      const secondSpy = spyOn(component, 'beingCalledSecond').and.callThrough();
      spyOn(console, 'log');
      spyOn(component, 'isHiringAngularDeveloper').and.callFake(() => 'Send your CVs');

      // Act
      component.ngOnInit();

      // Assert
      expect(component.beingCalledFirst).toHaveBeenCalledTimes(1);
      expect(component.beingCalledFirst).toHaveBeenCalledBefore(secondSpy);
      expect(component.beingCalledSecond).toHaveBeenCalled();
      expect(component.companyName).toEqual('Tufin');
      expect(console.log).toHaveBeenCalledWith('Send your CVs');
    });

  });

  describe('Element Interaction!', () => {
    it('should properly render company name element when it`s given', function () {
      // Arrange
      const selector = '.company-name';
      component.companyName = 'Not Tufin';

      // Act
      fixture.detectChanges();
      const companyNameEl = fixture.nativeElement.querySelector(selector);

      // Assert
      expect(companyNameEl).not.toBeNull();
      expect(companyNameEl.classList).not.toContain('tufin');
    });

    it('should not render company name element when it`s null', function () {
      // Arrange
      const selector = '.company-name';
      component.companyName = null;

      // Act
      fixture.detectChanges();
      const companyNameEl = fixture.nativeElement.querySelector(selector);

      // Assert
      expect(companyNameEl).toBeNull();
    });

    it('should properly add tufin class when the company name is Tufin', function () {
      // Arrange
      const selector = '.company-name';
      component.companyName = 'Tufin';

      // Act
      fixture.detectChanges();
      const companyNameEl = fixture.nativeElement.querySelector(selector);

      // Assert
      expect(companyNameEl).not.toBeNull();
      expect(companyNameEl.classList).toContain('tufin');
      expect(companyNameEl.textContent).toEqual('Tufin');
    });

    it('should properly call to alertCompanyName when the button is clicked', (done) => {
      // Arrange
      const selector = '.btn-primary';
      spyOn(window, 'alert');

      // Act
      const alertCNBtn = fixture.debugElement.query(By.css(selector));
      alertCNBtn.triggerEventHandler('click', {});

      // Assert
      setTimeout(() => {
        expect(window.alert).toHaveBeenCalledWith(component.companyName);
        done();
      }, 500)
    });

  });

});
