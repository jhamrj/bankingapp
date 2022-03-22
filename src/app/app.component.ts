import {Component, OnInit} from '@angular/core';
import {ConfigService} from "./config.service";

@Component({
  selector: 'bank-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  logo:any;
  banner:any;
  title:any;
  //dependency injection
  constructor(private configService:ConfigService) {
  }

  ngOnInit(): void {
        this.logo=this.configService.getLogo();
        this.banner=this.configService.getBanner();
        this.title=this.configService.getTitle();
    }


}
