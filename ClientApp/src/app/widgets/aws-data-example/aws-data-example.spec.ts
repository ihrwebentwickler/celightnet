import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {AwsDataExampleComponent} from './aws-data-example.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AwsDataExampleComponent', () => {
  let component: AwsDataExampleComponent;
  let fixture: ComponentFixture<AwsDataExampleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HttpClientModule
      ],
      declarations: [AwsDataExampleComponent],
      providers: [
        HttpClient
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsDataExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
