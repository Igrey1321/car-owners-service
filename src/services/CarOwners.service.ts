import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessageService} from '../app/message.service';
import {from, Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {OwnerEntity} from '../interfaces/OwnerEntity';
import {ICarOwnersService} from '../interfaces/ICarOwnersService';

@Injectable({providedIn: 'root'})
export class CarOwnersService implements ICarOwnersService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  private entityUrl = 'api/entity';


  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
  }

  getOwners(): Observable<OwnerEntity[]> {
    return this.http.get<OwnerEntity[]>(this.entityUrl)
      .pipe(
        tap(_ => this.log('fetched entity')),
        catchError(this.handleError<OwnerEntity[]>('getEntity', []))
      );
  }


  deleteOwner(aOwnerId: number): Observable<OwnerEntity> {
    const url = `${this.entityUrl}/${aOwnerId}`;

    return this.http.delete<OwnerEntity>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted owner id=${aOwnerId}`)),
      catchError(this.handleError<OwnerEntity>('deleteOwner'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
