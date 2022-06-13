import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import { ClienteDto } from '../../models/cliente.dto';
import { ClienteService } from '../../services/domain/cliente.service';

/**
 * Generated class for the EditClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-cliente',
  templateUrl: 'edit-cliente.html',
})
export class EditClientePage {
  formGroup: FormGroup
  editCliente: ClienteDto

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public menu: MenuController,
    public formBuilder: FormBuilder,
    public editBuilder: FormBuilder,
    public clienteService: ClienteService,
    public alertCtrl: AlertController) {
      this.editCliente = this.navParams.get('cliente');
      this.formGroup = this.formBuilder.group({
        id: [this.editCliente.id, [Validators.required]],
        nome: [this.editCliente.nome, [Validators.maxLength(30)]],
        descricao: [this.editCliente.descricao, [Validators.required]],
        tipoCliente: [0, [Validators.required]],
        documento: [this.editCliente.documento, [Validators.required]],
        tipoCadastro: [0, [Validators.required]]
    });
  }


  editarCliente() {
    console.log(this.formGroup.value);
    this.clienteService.update(this.formGroup.value)
      .subscribe(response => {
        this.showInsertOk();
      },
        error => { });
        
  }

  showInsertOk() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      message: 'Cadastro efetuado com sucesso',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.setRoot('ClientesPage');
          }
        }
      ]
    });
    alert.present();
  }

}

