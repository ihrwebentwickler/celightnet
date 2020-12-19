import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {WorkspaceComponent} from './workspace.component';

describe('WorkspaceComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        WorkspaceComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(WorkspaceComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
