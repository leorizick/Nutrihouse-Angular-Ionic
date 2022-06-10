import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AlertController, IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import { CategoriaService } from '../../services/domain/categoria.service';

/**
 * Generated class for the CadastroCategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-categorias',
  templateUrl: 'cadastro-categorias.html',
})
export class CadastroCategoriasPage {

  formGroup: FormGroup

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public menu: MenuController,
    public formBuilder: FormBuilder,
    public categoriaService: CategoriaService,
    public alertCtrl: AlertController) {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.maxLength(30)]],    
    });
  }

  cadastroCategorias() {
    console.log(this.formGroup.value);
    this.categoriaService.insert(this.formGroup.value)
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
            this.navCtrl.setRoot('CategoriasPage');
          }
        }
      ]
    });
    alert.present();
  }


}
