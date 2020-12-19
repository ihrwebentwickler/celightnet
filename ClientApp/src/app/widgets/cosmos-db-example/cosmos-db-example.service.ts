import {Injectable} from '@angular/core';
import {IEmployeeList} from './cosmos-db-example.interface';
import {Observable, of} from 'rxjs';
import {RestApiService} from '../../shared/services/rest-api.service';

@Injectable({
  providedIn: 'root',
})
export class CosmosDbExampleService {
  mockdata$!: IEmployeeList[];

  constructor(
    private readonly restApiService: RestApiService
  ) {
    this.mockdata$ = [
      {
        firstName: 'Firstname1',
        lastName: 'Lastname1',
        department: 'Department D1',
        employedSince: '2015-03-25T12:00:00Z'
      },
      {
        firstName: 'Firstname2',
        lastName: 'Lastname2',
        department: 'Department D2',
        employedSince: '2017-05-23T12:00:00Z'
      },
      {
        firstName: 'Firstname3',
        lastName: 'Lastname3',
        department: 'Department D3',
        employedSince: '2015-07-14T12:00:00Z'
      },
      {
        firstName: 'Firstname4',
        lastName: 'Lastname4',
        department: 'Department D4',
        employedSince: '2015-09-12T12:00:00Z'
      }
    ];
  }

  getEmployeeList(): Observable<IEmployeeList[]> {
    return of(this.mockdata$);
  }
}
