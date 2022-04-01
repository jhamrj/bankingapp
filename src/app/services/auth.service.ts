import { Injectable } from '@angular/core';
const TOKEN_KEY='auth_token';
const AUTH_USER='auth_user';
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() {
   window.sessionStorage.clear();
    window.sessionStorage.setItem(TOKEN_KEY,'');
    window.sessionStorage.setItem(AUTH_USER,'');
  }

  saveToken(token:string){
    window.sessionStorage.setItem(TOKEN_KEY,token);

  }
  saveUser(userName:string){
    window.sessionStorage.setItem(AUTH_USER,userName);

  }

  getToken(){
    if(window.sessionStorage.getItem(TOKEN_KEY)!=undefined)
     return window.sessionStorage.getItem(TOKEN_KEY);
    else
      return '';

  }
  getUser(){
    if(window.sessionStorage.getItem(AUTH_USER)!=undefined)
      return window.sessionStorage.getItem(AUTH_USER);
    else
      return '';

  }
  signout(){
    window.sessionStorage.clear();
  }

}
