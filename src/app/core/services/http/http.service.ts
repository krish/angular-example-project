import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpContext,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { ErrorService } from '../error/error.service';
import { ApiMethod } from '../const';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private _http: HttpClient, private error: ErrorService) {}

  call<T>(
    url: string,
    method: ApiMethod,
    data: any | null,
    options: {
      headers?:
        | HttpHeaders
        | {
            [header: string]: string | string[];
          };
      observe: 'response';
      context?: HttpContext;
      params?:
        | HttpParams
        | {
            [param: string]:
              | string
              | number
              | boolean
              | ReadonlyArray<string | number | boolean>;
          };
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    } = { observe: 'response' }
  ): Observable<HttpResponse<T>> {
    let response: Observable<HttpResponse<T>>;
    switch (method) {
      case ApiMethod.GET:
        response = this._http
          .get<T>(url, options)
          .pipe(catchError((err) => this.handleError(err)));
        break;
      case ApiMethod.POST:
        response = this._http
          .post<T>(url, data, options)
          .pipe(catchError((err) => this.handleError(err)));
        break;
      case ApiMethod.PUT:
        response = this._http
          .put<T>(url, data, options)
          .pipe(catchError((err) => this.handleError(err)));
        break;
      case ApiMethod.DELETE:
        response = this._http
          .delete<T>(url, options)
          .pipe(catchError((err) => this.handleError(err)));
        break;
    }
    return response;
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('there is an error occurred.', error.error.message);
      return throwError({
        source: 'client',
        error,
      });
    } else {
      return throwError({
        source: 'server',
        error,
      });
    }
  }
}
