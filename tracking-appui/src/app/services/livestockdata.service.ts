import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LivestockdataService {
  nseUrlToGetMetaInfo = baseUrl+"/api/equity-meta-info?symbol=";
  nseUrlForQuoteEquity01 = baseUrl + "/api/quote-equity?symbol=";
  nseUrlForQuoteEquity02 = baseUrl + "&section=trade_info";
  nseUrlForChartByIndex = baseUrl+"/api/chart-databyindex?index=ADANIPOWEREQN"
  constructor(private http: HttpClient) { }
  getCompanyMetaDetails() {
    console.log("calling NSE to fetch details getCompanyMetaDetails,");
    return this.http.get(this.nseUrlToGetMetaInfo+'ADANIPOWER').pipe(catchError(this.handleError));
  }
  getCompanyQuoteEquityDetails() {
    let headers = new HttpHeaders({
      'accept-language': 'en-US,en;q=0.9',
      'accept-encoding': 'gzip,',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
      'cookie': '8A960809176122A97DF7F36C8547758B~YAAQXdcLFyiUlTiBAQAAh93xqBAKj2J9uCDopDWGN328lbJRdNfuGINFimXfsw7FXcOEoRGEZZx43tI0R5MfG4NHEMJa/3DXHuQ/XC6zwkfggJIyu1Q+B1AKbq1LwaSymMxN1ZddLYjs4TLKF4ReXJdkI2vHxgC7ermvDRbvKf9pHSYgCFFK9Wd/APxqKY7+fXap81H316XQcg8Tgkkb+Tik7T8tnNi1xFIQ2UUpMwLnKIdNhsasB2Fsam8h7fQyNamC~1',
     });
    let options = { headers: headers };

    console.log("calling NSE to fetch details");
    return this.http.get(this.nseUrlForQuoteEquity01+'ADANIPOWER',options).pipe(catchError(this.handleError));
  }
  getCompanyQuoteEquityDetailsWithTradeInfo() {
    let headers = new HttpHeaders({
      'accept-language': 'en-US,en;q=0.9',
      'accept-encoding': 'gzip,',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
      'cookie': '8A960809176122A97DF7F36C8547758B~YAAQXdcLFyiUlTiBAQAAh93xqBAKj2J9uCDopDWGN328lbJRdNfuGINFimXfsw7FXcOEoRGEZZx43tI0R5MfG4NHEMJa/3DXHuQ/XC6zwkfggJIyu1Q+B1AKbq1LwaSymMxN1ZddLYjs4TLKF4ReXJdkI2vHxgC7ermvDRbvKf9pHSYgCFFK9Wd/APxqKY7+fXap81H316XQcg8Tgkkb+Tik7T8tnNi1xFIQ2UUpMwLnKIdNhsasB2Fsam8h7fQyNamC~1',
     });
    let options = { headers: headers };
    console.log("calling NSE to fetch details");
    return this.http.get(this.nseUrlForQuoteEquity01+'ADANIPOWER'+this.nseUrlForQuoteEquity02,options).pipe(catchError(this.handleError));
  }
  getCompanyQuoteForChartByIndex () {
    let headers = new HttpHeaders({
      'accept-language': 'en-US,en;q=0.9',
      'accept-encoding': 'gzip,',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
      'cookie': '8A960809176122A97DF7F36C8547758B~YAAQXdcLFyiUlTiBAQAAh93xqBAKj2J9uCDopDWGN328lbJRdNfuGINFimXfsw7FXcOEoRGEZZx43tI0R5MfG4NHEMJa/3DXHuQ/XC6zwkfggJIyu1Q+B1AKbq1LwaSymMxN1ZddLYjs4TLKF4ReXJdkI2vHxgC7ermvDRbvKf9pHSYgCFFK9Wd/APxqKY7+fXap81H316XQcg8Tgkkb+Tik7T8tnNi1xFIQ2UUpMwLnKIdNhsasB2Fsam8h7fQyNamC~1',
     });
    let options = { headers: headers };
    console.log("calling NSE to fetch details getCompanyQuoteForChartByIndex,");
    return this.http.get(this.nseUrlForChartByIndex,options).pipe(catchError(this.handleError));
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
