/* eslint-disable class-methods-use-this */
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { BASE_URL } from 'src/app/shared/constants';
import { env } from 'src/env';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class DataInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const url = `${BASE_URL}/${req.url}`.replace('<API_KEY>', env.API_KEY);
    const cloned = req.clone({
      url,
    });
    return next.handle(cloned);
  }
}
