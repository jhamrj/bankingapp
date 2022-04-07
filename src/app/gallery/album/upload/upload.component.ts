import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  private uploadedFile: any;
  private message: string;
   imgPath: any;
   imgUrl: string | ArrayBuffer | null;

  constructor() {

  }

  ngOnInit(): void {
  }

  onFileChanged($event: any) {

    this.uploadedFile=$event.target.files[0];
    console.log("Reaching......");
    console.log(this.uploadedFile);
    var mimeType=$event.target.files[0].type;
    if(mimeType.match(/image\/*/)==null){
      this.message="only images can be loaded";
      console.log(this.message);
      return;
    }

   var reader=new FileReader();
   this.imgPath=this.uploadedFile;
   reader.readAsDataURL(this.uploadedFile);
   reader.onload=(event=>{
     this.imgUrl=reader.result;
   })
  }



 /* onUpload($event: any) {
    for(let file of $event.files) {
    console.log(file);
    }
  }*/
}
