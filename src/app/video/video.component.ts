import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {VideoeditComponent} from "./videoedit/videoedit.component";
import {VideodeleteComponent} from "./videodelete/videodelete.component";
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
  constructor(private httpClient:HttpClient,private matDialog:MatDialog) { }
  displayedColumns: string[] = [ 'id', 'title','edit','delete'];
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

  openDialog(elem:any) {
    const dialogRef=this.matDialog.open(VideoeditComponent,{
           width: '500px',
           data: {
             id:elem.id,
             title: elem.title
           }
         });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.updateRowData(result);
    });

  }
  updateRowData(row_obj:any){
    this.tableSource.data = this.tableSource.data.filter((obj:any)=>{
      if(obj.id == row_obj.id){
        obj.title = row_obj.title;

      }
      return true;
    });
  }
  deleteRowData(elem:any) {
    const dialogRef=this.matDialog.open(VideodeleteComponent,{
      width: '500px',
      data: {
        id:elem.id,
        title: elem.title
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.tableSource.data = this.tableSource.data.filter((value:any)=>{
        return value.id != result.id;
      });

    });
  }
}
