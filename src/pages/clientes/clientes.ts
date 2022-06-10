import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClienteDto } from '../../models/cliente.dto';
import { ClienteService } from '../../services/domain/cliente.service';

/**
 * Generated class for the ClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html',
})
export class ClientesPage {

  items: ClienteDto[]



  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public clienteService: ClienteService,
    public http: HttpClient
  ) {
  }

  cadClientes(){
    this.navCtrl.push('CadastroClientePage')
  }


  ionViewDidLoad() {
    this.clienteService.findAll()
      .subscribe(response => {
        this.items = response;
        this.getImageIfExists()
      },
        error => { });
  }


  getImageIfExists() {
    for (let item of this.items) {
      this.clienteService.getImageFromLocal(item.id)
        .subscribe(Response => {
          item.imageUrl = `assets/imgs/clientes/${item.id}.png`;
        console.log(Response)
        },
          error => {item.imageUrl = 'assets/imgs/editicon.png'});
    }
  }


}






