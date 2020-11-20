import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import { LoremIpsumWidgetComponent } from './lorem-ipsum.component';

describe('LoremIpsumComponent', () => {
  let component: LoremIpsumWidgetComponent;
  let fixture: ComponentFixture<LoremIpsumWidgetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoremIpsumWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoremIpsumWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
