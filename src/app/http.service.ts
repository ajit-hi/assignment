import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient) { }

  saveForm(data){
      const headers = new HttpHeaders({
        'Content-type' : 'Application/json'
      });

    let url = "/uploadform";
    return this.http.post(url,data,{headers,responseType:'text'});
  }
}
