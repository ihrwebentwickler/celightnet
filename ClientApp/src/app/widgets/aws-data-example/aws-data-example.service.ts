import {Injectable} from '@angular/core';
import {APIService, ListCelightCmsCustomersQuery} from '../../shared/services/API.service';

@Injectable({
  providedIn: 'root',
})
export class AwsDataExampleService {

  constructor(
    private readonly apiService: APIService
  ) {
  }

  getCustomerList(): Promise<ListCelightCmsCustomersQuery> {
    return this.apiService.ListCelightCmsCustomers();
  }
}
