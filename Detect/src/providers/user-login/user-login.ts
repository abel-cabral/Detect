import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserLoginProvider {

  constructor(public http: HttpClient) {}
  apiUrl: string = "";

  //Cadastra novos usuários
  singUp(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/lessons').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });    
  }

  //Loga usuários 
  singIn(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/lessons').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });    
  }


}
