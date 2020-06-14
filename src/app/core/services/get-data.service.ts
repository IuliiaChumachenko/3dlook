import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  public baseUrl = 'api/';

  constructor(private http: HttpClient) { }

  public get(url: string): Observable<any> {
    return this.http.get<any[]>(this.baseUrl + url)
      .pipe(
        catchError(this.handleError(`get${url}`, []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}
