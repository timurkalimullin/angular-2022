import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { DataInterceptor } from './data.interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: DataInterceptor, multi: true },
];
