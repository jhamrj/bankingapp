import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import {Observable,of as observableOf} from "rxjs/index";
import {EMPTY} from "rxjs/index";
import{pipe} from "rxjs/index";
import{throwError} from "rxjs/index";
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

const AUTH_API = 'http://localhost:4000/';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private  httpClient:HttpClient) { }

  public sendCustomer(customerObj:any):Observable<any>
  {

    return this.httpClient.post(AUTH_API + 'customers',
      customerObj).pipe(
      catchError( err => {
        if ((err.status > 400)&&(err.status < 500)) {
          return EMPTY;
        } else {
          return throwError(err);
        }
      })
    );

  }
  public sendLogin(userName:any):Observable<any>
  {

    return this.httpClient.get(AUTH_API + 'customers?userName='+userName).pipe(
      catchError( err => {
        if ((err.status > 400)&&(err.status < 500)) {
          return EMPTY;
        } else {
          return throwError(err);
        }
      })
    );

  }
}
