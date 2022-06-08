import { Component } from '@angular/core';
import { a } from '@angular/core/src/render3';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserDto } from '../../models/user.dto';
import { AuthService } from '../../services/auth.service';
import { ProfilePage } from '../profile/profile';


@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPages {

public profile : UserDto;

  constructor(
     public navCtrl: NavController,
     public navParams: NavParams,
     public auth: AuthService
    ) {
    }

    categoriasPage(){
      this.navCtrl.setRoot("CategoriasPage");
    }


    profilePage(){
      this.navCtrl.setRoot("ProfilePage");
    }

    logoutPage(){
      this.auth.logout();
      this.navCtrl.setRoot('HomePage');
    }
  
}
