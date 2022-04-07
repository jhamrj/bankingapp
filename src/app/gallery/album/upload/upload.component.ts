import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UploadService} from "../../../services/upload.service";

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
   file:any;
  constructor(private uploadService:UploadService) {

  }

  ngOnInit(): void {
  }

  onFileChanged($event: any) {

    //multiple files
    console.log($event.target.files);


    let item={
      key:"",
      value:""
    }
    for(var type in $event.target.files){

      item.key=type;
      item.value=$event.target.files[type]
      console.log(item);
    }


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

    const uploadImageData = new FormData();
   console.log(this.uploadedFile.name);
    uploadImageData.append('profilepic', this.uploadedFile, this.uploadedFile.name);
    this.uploadService.sendImage(uploadImageData).subscribe(response=>{
      console.log(response);
    },
      err=>{
        console.log(err)
      })

  }



 /* onUpload($event: any) {
    for(let file of $event.files) {
    console.log(file);
    }
  }*/
}
