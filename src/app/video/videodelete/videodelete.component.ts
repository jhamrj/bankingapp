import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-videodelete',
  templateUrl: './videodelete.component.html',
  styleUrls: ['./videodelete.component.css']
})
export class VideodeleteComponent implements OnInit {

  constructor( public matDialogRef: MatDialogRef<VideodeleteComponent>,
               @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.matDialogRef.close();
  }
}
