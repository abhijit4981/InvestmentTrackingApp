import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { Order } from '../models/order.model';
import { Orders } from '../models/orders.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  oredrUrl = baseUrl+"/orders/";

  constructor(private http: HttpClient) { }

  createOrder(value: Order) {
    console.log("calling backend"+this.oredrUrl+" with order details "+value.companyBroughtQuantity)
    return this.http.post<Order>(this.oredrUrl,value).pipe(catchError(this.handleError));
  }
  getAllOrders(){
    return this.http.get<Orders>(this.oredrUrl).pipe(catchError(this.handleError));
  }


  private handleError(httpError: HttpErrorResponse) {
    if (httpError.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', httpError.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${httpError.status}, ` +
        `body was: ${httpError.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}
