import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {UserAppsDialogComponent} from './user-apps-dialog.component';

describe('UserAppsDialogComponent', () => {
  let component: UserAppsDialogComponent;
  let fixture: ComponentFixture<UserAppsDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UserAppsDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAppsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
