import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../users/Services/auth.service';
import { IsInterceptorRequiredService } from '../users/Services/is-interceptor-required.service';
import { Router } from '@angular/router';

@Injectable()
export class JwtTokenInterceptor implements HttpInterceptor {
  urlsToNotUse = []
  constructor(
    private _authService : AuthService,
    private isInterceptorRequiredService: IsInterceptorRequiredService,
    private route: Router) { 
    this.urlsToNotUse = [

    ]
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let api = this.route.routerState.snapshot.url;
    if (this.isInterceptorRequiredService.isTokenNeeded(api)) {
      const jwt = localStorage.getItem('token')
      return next.handle(request.clone({
        setHeaders: { authorization: `Bearer ${jwt}` }
      }));
    } else {
      return next.handle(request)
    }
  }
}
