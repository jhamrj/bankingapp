import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {VideoeditComponent} from "./videoedit/videoedit.component";
import {VideodeleteComponent} from "./videodelete/videodelete.component";
import {SelectionModel} from "@angular/cdk/collections";
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
  displayedColumns: string[] = ['select', 'id', 'title','edit','delete'];
  selection = new SelectionModel<any>(true, []);

  tableSource = new MatTableDataSource();
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.tableSource.data.length;
    return numSelected === numRows;
  }
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
    console.log(this.tableSource.filter );
    this.tableSource.data.filter((obj:any)=> {
      if (obj.id == this.tableSource.filter) {
        this.selection.select(obj);
        this.checkboxLabel(obj);
      }
    });
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

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.tableSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {

    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
