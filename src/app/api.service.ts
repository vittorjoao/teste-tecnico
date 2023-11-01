import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { API, Person } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API_URL: string =
    'https://abitus-api.pjc.mt.gov.br/v1/pessoas/aberto/filtro';

  constructor(private http: HttpClient) {}

  get(): Observable<API> {
    const options = {
      params: new HttpParams()
        .set('porPagina', 12)
        .append('status', 'DESAPARECIDO')
        .append('pagina', 0),
    };

    return this.http.get<API>(this.API_URL, options).pipe(
      tap((_) => console.log('fetched missing persons API')),
      catchError(this.handleError<API>('get'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
