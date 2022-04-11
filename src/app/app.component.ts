import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ConfigService} from "./config.service";
import {AuthService} from "./services/auth.service";
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, Event} from "@angular/router";
import {Observable} from "rxjs/index";
import {filter, map, take} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
const DATA_URL='http://localhost:4200'
@Component({
  selector: 'bank-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})

export class AppComponent implements OnInit{
  isLoggedIn=false;
  logo:any;
  banner:any;
  title:any;
  token_key:any;
  auth_user:any;
  loading = true;
  comments:any;
  readonly loading$: Observable<boolean> = this.router.events.pipe(
    map((event) => this.checkRouterEvent(event))
  );
  //dependency injection
  constructor(private configService:ConfigService,
              private authService:AuthService,private router:Router) {

  }

  ngOnInit(): void {
        this.logo=this.configService.getLogo();
        this.banner=this.configService.getBanner();
        this.title=this.configService.getTitle();

        console.log(this.token_key,this.auth_user);
    this.router.events
      .pipe(filter((rs): rs is NavigationEnd => rs instanceof NavigationEnd))
      .subscribe(event => {
        console.log("Route changes.....");
        this.token_key=this.authService.getToken();
        this.auth_user=this.authService.getUser();
        if(this.token_key.length>1 && this.auth_user.length>1)
           this.isLoggedIn=true;

        if (
          event.id === 1 &&
          event.url === event.urlAfterRedirects
        ) {
          this.loading=false;
        }
      })


    }

  checkRouterEvent(routerEvent: Event): boolean {
    let status:boolean = false;
    if (routerEvent instanceof NavigationStart) {
      status=true;
      console.log(status);
    }

    if (routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationError) {
      status=false
      console.log(status);
    }
    console.log(status);
    return status;
  }

}
