import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { Models } from '../models/models.component';
import { ModelPojo } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  modelUrl = baseUrl+"/nse/";
  nseCreateUrl =baseUrl + "/nse/savebasicinfo/";
  constructor(private http: HttpClient) { }

  getAllModels() {
    console.log("calling backend"+this.modelUrl)
    return this.http.get<any>(this.modelUrl).pipe(catchError(this.handleError));
  }
  getModelBasedOnId(mobileNumber: number){
    return this.http.get<ModelPojo>(this.modelUrl+mobileNumber).pipe(catchError(this.handleError));
  }

  saveUser(user:ModelPojo) {
    //return this.http.post<ModelPojo>(this.modelUrl,user).pipe(catchError(this.handleError));
    return this.http.get<any>(this.nseCreateUrl+user.companyName).pipe(catchError(this.handleError));
  }
  cloneUser(user:ModelPojo) {
    return this.http.post<ModelPojo>(this.modelUrl,user).pipe(catchError(this.handleError));
  }
  updateUser(user:ModelPojo,mobileNumber:number){
    return this.http.put<ModelPojo>(this.modelUrl+mobileNumber,user).pipe(catchError(this.handleError));
  }
  deleteModel(mobileNumber: number) {
    return this.http.delete(this.modelUrl+mobileNumber).pipe(catchError(this.handleError));
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
