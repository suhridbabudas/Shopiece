import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIQuery } from 'src/app-custom-library/app-common-interfaces/APIQuery';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppApiService {
  constructor(private http: HttpClient) {}

  get<T>(apiQuery: APIQuery<T>): Observable<T> {
    return this.http.get<T>(apiQuery.URL, apiQuery.options).pipe(
      catchError((error) => {
        return throwError(() => error.error);
      })
    );
  }

  post<T>(apiQuery: APIQuery<T>): Observable<T> {
    return this.http.post<T>(apiQuery.URL, apiQuery.payload, apiQuery.options).pipe(
      catchError((error) => {
        return throwError(() => error.error);
      })
    );
  }

  put<T>(apiQuery: APIQuery<T>): Observable<T> {
    return this.http.put<T>(apiQuery.URL, apiQuery.payload, apiQuery.options).pipe(
      catchError((error) => {
        return throwError(() => error.error);
      })
    );
  }

  delete<T>(apiQuery: APIQuery<T>): Observable<T> {
    return this.http.delete<T>(apiQuery.URL, apiQuery.options).pipe(
      catchError((error) => {
        return throwError(() => error.error);
      })
    );
  }
}
