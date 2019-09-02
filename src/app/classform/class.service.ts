import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { ItemClass, ChildItems } from '../shared/item';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const classUrl = 'https://5d5c1e1f4311db0014983178.mockapi.io/api/class';
const childUrl = 'https://5d5c1e1f4311db0014983178.mockapi.io/api/class/:id/children';


@Injectable({
  providedIn: 'root'
})
export class ClassService {

  asyncResult: any;

  constructor(private http: HttpClient) { }

  getCardList(): Observable<ItemClass[]> {
    return this.http.get<ItemClass[]>(classUrl)
    .pipe(
      tap(card => console.log('fetched items')),
      catchError(this.handleError('get card List', []))
    );
  }

   createCard(card: ItemClass): Observable<ItemClass> {
    return this.http.post<ItemClass>(classUrl, card, httpOptions).pipe(
      tap((car: any) => console.log(`added item w/ id=${car.id}`)),
      catchError(this.handleError<ItemClass>('CreateCard'))
    );
  }

 /* async createCard(card: ItemClass) {
    try {
      this.asyncResult = await this.http.post<ItemClass>(classUrl, card, httpOptions).toPromise();
      console.log(this.asyncResult.json());
      const response = this.asyncResult.json();
      if (response.id === undefined ) {
        return;
      } else {
        return this.asyncResult;
      }
    } catch {
      this.handleError<ItemClass>('create Card');
    }
  } */

  async addTheChild(child: ChildItems, parent: ItemClass) {
    const url = await `https://5d5c1e1f4311db0014983178.mockapi.io/api/class/${parent.id}/children`;
    this.asyncResult = await this.http.post<ChildItems>(url, child, httpOptions).toPromise();
    return this.asyncResult;
  }

  getChildren(parent: ItemClass): Observable<ChildItems[]> {
    return this.http.get<ChildItems[]>(`https://5d5c1e1f4311db0014983178.mockapi.io/api/class/${parent.id}/children`)
    .pipe(
      tap(card => console.log('fetched card Children')),
      catchError(this.handleError('get children List', []))
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
