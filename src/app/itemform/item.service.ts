import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Item } from '../shared/item';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const itemUrl = 'https://5d5c1e1f4311db0014983178.mockapi.io/api/items';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) {

   }

   getItemList(): Observable<Item[]> {
    return this.http.get<Item[]>(itemUrl)
    .pipe(
      tap(item => console.log('fetched item list')),
      catchError(this.handleError('get Item List', []))
    );
  }

  createItem(item: Item): Observable<Item> {
    return this.http.post<Item>(itemUrl, item, httpOptions).pipe(
      tap((prod: any) => console.log(`added item w/ id=${prod._id}`)),
      catchError(this.handleError<Item>('Create Item'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
