import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {SwapiExampleComponent} from './swapi-example.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('SwapiExampleComponent', () => {
  let component: SwapiExampleComponent;
  let fixture: ComponentFixture<SwapiExampleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HttpClientModule
      ],
      declarations: [SwapiExampleComponent],
      providers: [
        HttpClient
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapiExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
