import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { API, Person } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API_URL: string = 'https://abitus-api.pjc.mt.gov.br/v1/pessoas/';

  constructor(private http: HttpClient) {}

  get(page: number): Observable<API> {
    const options = {
      params: new HttpParams()
        .set('porPagina', 12)
        .append('status', 'DESAPARECIDO')
        .append('pagina', page),
    };

    return this.http.get<API>(`${this.API_URL}aberto/filtro`, options).pipe(
      tap((_) => console.log('[API] Fetched missing persons')),
      catchError(this.handleError<API>('get'))
    );
  }

  getById(id: number): Observable<Person> {
    const options = {
      params: new HttpParams().set('id', id),
    };

    return this.http.get<Person>(`${this.API_URL}${id}`, options).pipe(
      tap((_) =>
        console.log(`[API] Fetched missing person details by id: ${id} `)
      ),
      catchError(this.handleError<Person>('getById'))
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
