import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {AwsDbExampleComponent} from './cosmos-db-example.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CosmosDbExampleComponent', () => {
  let component: AwsDbExampleComponent;
  let fixture: ComponentFixture<AwsDbExampleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HttpClientModule
      ],
      declarations: [AwsDbExampleComponent],
      providers: [
        HttpClient
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsDbExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
