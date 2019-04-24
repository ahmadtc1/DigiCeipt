import { Injectable } from '@angular/core';
import { Receipt } from './receipt';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  constructor(private http: HttpClient) { }

  getReceipts(): Receipt[] {

  }

  saveReceipt(): any {
    
  }

  private handleError(err: HttpErrorResponse) {
    //in a real world app we may send the server to some remote logging infrastructure
    //Instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      //A client-side or network error occurred. Handle it accordingly
      errorMessage = `An error occurred ${err.error.message}`;
    }

    else {
      //The backend returned an unsuccessful reponse code
      //The response body may contain clues as to what went wrong
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
