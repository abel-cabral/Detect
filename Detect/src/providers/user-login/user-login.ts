import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Injectable()
export class UserLoginProvider {

  constructor(
    public http: HttpClient,
    private alertCtrl: AlertController,
    public storage: Storage,
    ) {}

  apiUrl: string = "/api";


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
  singIn(login){
    return new Promise(resolve => {

      this.http.post(this.apiUrl + '/users', login)
      .subscribe(data => {
        // SUCESSO resposta da API com a info do usuario e sessao
        let user = data;
        this.storage.set('status', true);
        this.storage.get('status').then((data) => console.log(data));
      }, err => {
        alert('Houve um erro :/');
        console.log(err);
      });
    });
  }


  welcome(name: string): void{
    let alert = this.alertCtrl.create({
      title: 'Boas Vindas',
      subTitle: name + ', estamos felizes por você se juntar a nois, juntos por uma cidade melhor e mais segura',
      buttons: ['Começar']
    });
    alert.present();
  }
}
