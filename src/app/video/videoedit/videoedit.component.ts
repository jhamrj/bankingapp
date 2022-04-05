import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-videoedit',
  templateUrl: './videoedit.component.html',
  styleUrls: ['./videoedit.component.css']
})
export class VideoeditComponent implements OnInit {

  constructor( public matDialogRef: MatDialogRef<VideoeditComponent>,
               @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.matDialogRef.close();
  }

}
