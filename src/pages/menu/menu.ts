import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaDTO } from '../../models/categoria.dto';
import { CategoriaService } from '../../services/domain/categoria.service';

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPages {
  
  constructor(
     public navCtrl: NavController,
     public navParams: NavParams
    ) {
    }

    menu(){
      this.navCtrl.setRoot("CategoriasPage");
    }
}
