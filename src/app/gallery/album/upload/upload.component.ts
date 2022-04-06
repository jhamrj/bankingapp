import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  photo: FormControl;
  profileForm:FormGroup;
  private uploadedFile: any;
  private fileReader: FileReader;
   img:any;
  constructor(private formBuilder:FormBuilder) {
    this.photo=new FormControl('',[Validators.required])
    this.profileForm=formBuilder.group({
      photo:this.photo
    })

  }

  ngOnInit(): void {
  }

  onFileChanged($event: any) {
    this.uploadedFile=$event.target.files[0];
   console.log(this.uploadedFile);

  }

  upload() {

  }
}
