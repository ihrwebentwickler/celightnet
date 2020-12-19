import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {WidgetFrameComponent} from './widget-frame.component';

describe('WidgetFrameComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        WidgetFrameComponent
      ],
    }).compileComponents();
  });

  it('should create the widget-frame-component', () => {
    const fixture = TestBed.createComponent(WidgetFrameComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
