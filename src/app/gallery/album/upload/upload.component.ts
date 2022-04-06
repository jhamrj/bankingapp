import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }

  onFileChanged($event: any) {
   /* this.uploadedFile=$event.target.files[0];
    var mimeType=$event.target.files[0].type;
    if(mimeType.match(/image\/!*!/)==null){
      this.message="only images can be loaded";
      return;
    }
   console.log(this.uploadedFile);
   var reader=new FileReader();
   this.imgPath=this.uploadedFile;
   reader.readAsDataURL(this.uploadedFile);
   reader.onload=(event=>{
     this.imgUrl=reader.result;
   })*/
  }

  upload() {

  }
}
