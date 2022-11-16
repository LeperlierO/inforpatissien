import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const currentToken = this.authService.tokenValue;
    const isApiUrl = request.url.startsWith("https://inforpatissien-api.azurewebsites.net") || request.url.startsWith("https://localhost:44383/");
    if (currentToken && isApiUrl) {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${currentToken.token}`
            }
        });
    }

    return next.handle(request);
  }
}
