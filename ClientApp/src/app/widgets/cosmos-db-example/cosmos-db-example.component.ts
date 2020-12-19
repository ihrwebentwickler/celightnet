import {Component, OnInit, ViewChild} from '@angular/core';
import {CosmosDbExampleService} from './cosmos-db-example.service';
import {IEmployeeList} from './cosmos-db-example.interface';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-cosmos-db-example',
  templateUrl: './cosmos-db-example.component.html'
})
export class CosmosDbExampleComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource!: MatTableDataSource<IEmployeeList>;
  displayedColumns: string[] = ['firstName', 'lastName', 'department', 'employedSince'];
  isLoading = false;

  constructor(
    private readonly cosmosDbExampleService: CosmosDbExampleService
  ) {
  }

  ngOnInit(): void {
    this.cosmosDbExampleService.getEmployeeList().subscribe((employeeList: IEmployeeList[]) => {
        if (Array.isArray(employeeList)) {
          this.dataSource = new MatTableDataSource(employeeList);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.isLoading = false;
        }
      }
    );
  }

  onApplyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
