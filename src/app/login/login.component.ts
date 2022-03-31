import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
//template driven page
export class LoginComponent implements OnInit {

  form={
    userName:"",
    password:""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
