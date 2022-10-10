import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(`Request made to` + request.url);

    let httpAuth = request.headers.get('Authorization');
    httpAuth = 'addingValueFromInterceptor' + httpAuth;
    
    request.headers.append('RefreshToken', httpAuth);
    console.log(httpAuth);
    
    return next.handle(request);
  }
}
