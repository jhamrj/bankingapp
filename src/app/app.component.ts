import {Component, OnInit} from '@angular/core';
import {ConfigService} from "./config.service";
import {AuthService} from "./services/auth.service";
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, Event} from "@angular/router";
import {Observable} from "rxjs/index";
import {filter, map, take} from "rxjs/operators";
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
  loading = true;
  readonly loading$: Observable<boolean> = this.router.events.pipe(
    map((event) => this.checkRouterEvent(event))
  );
  //dependency injection
  constructor(private configService:ConfigService,
              private authService:AuthService,private router:Router) {
    router.events.pipe(filter(e => e instanceof NavigationStart), take(1))
      .subscribe((e) => {
        this.loading = false;
        //alert('loaded - this fires only once');
      });
  }

  ngOnInit(): void {
        this.logo=this.configService.getLogo();
        this.banner=this.configService.getBanner();
        this.title=this.configService.getTitle();
        this.token_key=this.authService.getToken();
        this.auth_user=this.authService.getUser();
        console.log(this.token_key,this.auth_user);
    this.router.events
      .pipe(filter((rs): rs is NavigationEnd => rs instanceof NavigationEnd))
      .subscribe(event => {
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
