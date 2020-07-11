import {HighlightDirective} from './highlight.directive';
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {Component} from "@angular/core";
import {By} from "@angular/platform-browser";

fdescribe('HighlightDirective', () => {
  let fixture: ComponentFixture<DummyComponent>;
  let dummyComponent: DummyComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HighlightDirective, DummyComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(DummyComponent);
    dummyComponent = fixture.componentInstance;
  }));

  it('should properly highlight the element on mouseover', () => {
    const elementToHightlight = fixture.debugElement.query(By.css('.element-to-highlight'));

    elementToHightlight.triggerEventHandler('mouseenter',{});

    expect(elementToHightlight.styles.color).toEqual('red');

    elementToHightlight.triggerEventHandler('mouseleave',{});

    expect(elementToHightlight.styles.color).not.toEqual('red');
  });
});

@Component({
  selector: 'app-employees-list',
  template: `
    <div class="element-to-highlight" highlight></div>`
})
export class DummyComponent {
}
