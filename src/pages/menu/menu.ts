import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserDto } from '../../models/user.dto';


@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPages {

  user : UserDto;
  
  constructor(
     public navCtrl: NavController,
     public navParams: NavParams
    ) {
    }

    categoriasPage(){
      this.navCtrl.setRoot("CategoriasPage");
    }

    profilePage(){
      this.navCtrl.setRoot("ProfilePage");
    }

  
}
