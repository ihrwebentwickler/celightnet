import {Component, OnInit, ViewChild} from '@angular/core';
import {AwsDataExampleService} from './aws-data-example.service';
import {ICustomerList} from './aws-data-example.interface';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ListCelightCmsCustomersQuery} from '../../shared/services/API.service';

@Component({
  selector: 'app-aws-data-example',
  templateUrl: './aws-data-example.component.html'
})
export class AwsDataExampleComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource!: MatTableDataSource<ICustomerList | null>;
  displayedColumns: string[] = ['idCustomer', 'firstName', 'lastName', 'department', 'employedSince'];
  isLoading = false;

  constructor(
    private readonly awsDataExampleService: AwsDataExampleService
  ) {
  }

  ngOnInit(): void {
    this.awsDataExampleService.getCustomerList().then((customerListQuery: ListCelightCmsCustomersQuery) => {
      if (Array.isArray(customerListQuery.items)) {
          this.dataSource = new MatTableDataSource(customerListQuery.items);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.isLoading = false;
        }
      }
    )
    .catch((err: string) => {
      // implement error-handling here
    });
  }

  onApplyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
