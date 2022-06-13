import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClienteDto } from '../../models/cliente.dto';
import { ClienteService } from '../../services/domain/cliente.service';

/**
 * Generated class for the ClienteDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cliente-detail',
  templateUrl: 'cliente-detail.html',
})
export class ClienteDetailPage {

  item : ClienteDto;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public clienteService: ClienteService) {
  }

  ionViewDidLoad() {
    let cliente_id = this.navParams.get('cliente_id');
    this.clienteService.findById(cliente_id)
    .subscribe(response => {
      this.item = response;
      this.getImageIfExists();
    },
    error => {});
    }

    getImageIfExists() {
        this.clienteService.getImageFromLocal(this.item.id)
          .subscribe(Response => {
            this.item.imageUrl = `assets/imgs/clientes/${this.item.id}.png`;
          },
            error => {this.item.imageUrl = 'assets/imgs/editicon.png'});
      }

      editarCliente(cliente : ClienteDto){
        this.navCtrl.push('EditClientePage', {cliente : cliente});
      }
    }

