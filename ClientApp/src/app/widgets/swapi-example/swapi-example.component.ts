import {Component, OnInit, ViewChild} from '@angular/core';
import {IFilmList} from './swapi-example.interface';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {SwapiExampleService} from './swapi-example.service';

@Component({
  selector: 'app-swapi-example',
  templateUrl: './swapi-example.component.html'
})
export class SwapiExampleComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource!: MatTableDataSource<IFilmList>;
  displayedColumns: string[] = ['title', 'created', 'director'];
  isLoading = false;

  constructor(
    private readonly swapiExampleService: SwapiExampleService
  ) {
  }

  ngOnInit(): void {
    this.swapiExampleService.getFilmList().subscribe((filmList: IFilmList[]) => {
        if (Array.isArray(filmList)) {
          this.dataSource = new MatTableDataSource(filmList);
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
