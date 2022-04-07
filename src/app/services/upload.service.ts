import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import {Observable,of as observableOf} from "rxjs/index";
import {EMPTY} from "rxjs/index";
import{pipe} from "rxjs/index";
import{throwError} from "rxjs/index";
import { catchError } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  ' multipart/form-data;boundary=something'
  })
};

const AUTH_API = 'http://localhost:4000/';
@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private httpClient:HttpClient) { }

  public sendImage(imgFile:any):Observable<any>
  {

    return this.httpClient.post(AUTH_API + 'upload-file',
      imgFile).pipe(
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
