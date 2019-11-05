import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

const URL = 'http://group.demandid.com';
@Injectable({
  providedIn: 'root'
})
export class InformationService {


  constructor(private _http: HttpClient, ) {
   }
  //  Function to search for id details
  search(body: any) {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
     var replace = body;
    replace = replace.substring(1, replace.length - 1);
    return this._http.get( `${URL}/api/getId/` + replace, {
      // observe:'body',
     headers:headers
    })
    .pipe(map(data => { 
    console.log(data)
      
      return data; 
    })
    );
  }
}
