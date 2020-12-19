import {IFilmList} from './swapi-example.interface';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {RestApiService} from '../../shared/services/rest-api.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SwapiExampleService {
  constructor(
    private readonly restApiService: RestApiService
  ) {
  }

  getFilmList(): Observable<IFilmList[]> {
    return this.restApiService.get({
      endpoint: 'https://swapi.dev/api/films/'
    }).pipe(
      map((data) => {
        if (Array.isArray(data) && data[0].results) {
          return data[0].results;
        }
      })
    );
  }
}
