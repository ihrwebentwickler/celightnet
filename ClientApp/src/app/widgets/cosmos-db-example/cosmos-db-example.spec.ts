import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {CosmosDbExampleComponent} from './cosmos-db-example.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CosmosDbExampleComponent', () => {
  let component: CosmosDbExampleComponent;
  let fixture: ComponentFixture<CosmosDbExampleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HttpClientModule
      ],
      declarations: [CosmosDbExampleComponent],
      providers: [
        HttpClient
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmosDbExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
