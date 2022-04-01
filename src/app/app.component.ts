import {Component, OnInit} from '@angular/core';
import {ConfigService} from "./config.service";
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'bank-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  logo:any;
  banner:any;
  title:any;
  token_key:any;
  auth_user:any;
  //dependency injection
  constructor(private configService:ConfigService,private authService:AuthService) {
  }

  ngOnInit(): void {
        this.logo=this.configService.getLogo();
        this.banner=this.configService.getBanner();
        this.title=this.configService.getTitle();
        this.token_key=this.authService.getToken();
        this.auth_user=this.authService.getUser();
        console.log(this.token_key,this.auth_user);
    }


}
