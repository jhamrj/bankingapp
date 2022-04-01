import { Component, OnInit } from '@angular/core';
import {RegisterService} from "../services/register.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
//template driven page
export class LoginComponent implements OnInit {
userName:any;
password:any;
  form={
    userName:"",
    password:""
  }
  isLoggedIn = false;


  constructor(private registerService:RegisterService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form);
    this.registerService.sendLogin(this.form.userName).subscribe(response=>
    {
      response.forEach((x:any)=>console.log(x.userName));
    })
  }
}
