import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
const DATA_URL='http://localhost:4200/Menu/File/New/Video'
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit,AfterViewInit {

 @ViewChild(MatPaginator, {static: false}) paginator:MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild('input') input: ElementRef;
  comments:any
  constructor(private httpClient:HttpClient) { }
  displayedColumns: string[] = [ 'id', 'title'];
  tableSource = new MatTableDataSource();
  ngOnInit(): void {

    this.httpClient.get(DATA_URL).subscribe((data) => {
      console.log(data);
      this.comments = data;
      this.tableSource.data = this.comments;
    });
  }

  ngAfterViewInit() {
    this.tableSource.paginator = this.paginator;
    this.tableSource.sort = this.sort;

  }

  applyFilter(event: Event) {
    const filter = (event.target as HTMLInputElement).value.trim().toLocaleLowerCase();
    this.tableSource.filter = filter;
    if (this.tableSource.paginator) {
      this.tableSource.paginator.firstPage();
    }
  }
}
