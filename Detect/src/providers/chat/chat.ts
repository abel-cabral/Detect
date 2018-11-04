import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ChatProvider {
  results : any;
  apiUrl : string = "/chat";
  token : string = "1c5f29247aab4036b73da2e645b71691";

  constructor(public http: HttpClient) { }

  sendMessage(): void {
    this.http.get(this.apiUrl, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token),
    })
    .subscribe(data => {
      this.results = data;
    }); 
  } 
}
