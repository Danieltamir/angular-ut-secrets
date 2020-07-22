import {HighlightDirective} from './highlight.directive';
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {Component} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('HighlightDirective', () => {
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
    const selector = '.element-to-highlight';
    const el = fixture.debugElement.query(By.css(selector));

    el.triggerEventHandler('mouseenter',{});
    expect(el.nativeElement.style.color).toEqual('red');

    el.triggerEventHandler('mouseleave',{});
    expect(el.nativeElement.style.color).toEqual('');
  });
});

@Component({
  selector: 'dummy-component',
  template: `
    <div class="element-to-highlight" highlight>Highlighted Text</div>
  `
})
export class DummyComponent {
}
