import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customerId:FormControl;
  accountNo:FormControl;
  firstName:FormControl;
  lastName:FormControl;
  userName:FormControl;
  password:FormControl;
  confirmPassword:FormControl;
  regFormGroup:FormGroup;

  constructor(private formBuilder:FormBuilder) {

    //rule
    this.customerId=new FormControl('',[Validators.required,
    Validators.pattern("[0-9]{10}")]);
    this.accountNo=new FormControl('',[Validators.required,
      Validators.pattern("[0-9]{10}")]);
    this.firstName=new FormControl('',[Validators.required,
      Validators.pattern("[A-Za-z]{5,25}")]);
    this.lastName=new FormControl('',[Validators.required,
      Validators.pattern("[A-Za-z]{5,25}")]);
    this.userName=new FormControl('',[Validators.required,
      Validators.pattern("[A-Za-z]{5,10}")]);
    this.password=new FormControl('',[Validators.required,
      Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,20}$')]);
    this.confirmPassword=new FormControl('',[Validators.required]);

   this.regFormGroup=formBuilder.group({
     customerId:this.customerId,
     accountNo:this.accountNo,
     firstName:this.firstName,
     lastName:this.lastName,
     userName:this.userName,
     password:this.password
   })

  }

  ngOnInit(): void {
  }

  save(){
    console.log(this.regFormGroup.value);
  }
}
