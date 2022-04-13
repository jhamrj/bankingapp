import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import {Observable} from "rxjs/index";
import {AuthService} from "./auth.service";
/*
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class LoginGuard implements CanActivate,CanActivateChild{
  private token_key: any;
  private auth_user: any;
  private isLoggedIn: boolean=false;

  constructor(private authService:AuthService,private router:Router) {


  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.token_key=this.authService.getToken();
    this.auth_user=this.authService.getUser();
    if(this.token_key.length>1 && this.auth_user.length>1)
      this.isLoggedIn=true;
    else {
      this.router.navigate(['/Login']);
      return false;
    }
    return this.isLoggedIn;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.token_key=this.authService.getToken();
    this.auth_user=this.authService.getUser();
    if(this.token_key.length>1 && this.auth_user.length>1)
      this.isLoggedIn=true;
    else {
      this.router.navigate(['/Login']);
      return false;
    }
    return this.isLoggedIn;
  }

}
*/
