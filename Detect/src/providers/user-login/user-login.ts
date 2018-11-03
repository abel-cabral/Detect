import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';


@Injectable()
export class UserLoginProvider {

  constructor(
    public http: HttpClient,
    private alertCtrl: AlertController,
    ) {}
  apiUrl: string = "/api";

  welcome(name: string): void{    
    let alert = this.alertCtrl.create({
      title: 'Boas Vindas',
      subTitle: name + ', estamos felizes por você se juntar a nois, juntos por uma cidade melhor e mais segura',
      buttons: ['Começar']
    });
    alert.present();
  } 
  
  //Cadastra novos usuários
  singUp(data){    
    return new Promise(resolve => {
  this.http.post(this.apiUrl + '/users', data)
      .subscribe(res => {                                       
          resolve (data.name);                    
        }, err => {          
          alert('Erro ao cadastrar :/');
        });
      });      
  }

  //Loga usuários 
  singIn(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/users').subscribe(data => {
        resolve(data);
      }, err => {
        alert('Houve um erro :/');
        console.log(err);
      });
    });    
  }

  
}
 