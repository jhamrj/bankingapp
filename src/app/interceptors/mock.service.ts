import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable, of} from "rxjs/index";
const DATA_URL='http://localhost:4200/Menu/File/New/Video'
import * as data from "./data.json"
@Injectable()
export class MockService  implements HttpInterceptor {

  constructor(private injector:Injector) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted request: ' + request.url);
    if (request.url === DATA_URL) {
      console.log('Loaded from JSON: ' + request.url);
      return of(new HttpResponse({status: 200, body: ((data) as any).default}));
    }
    return next.handle(request);
  }
}
