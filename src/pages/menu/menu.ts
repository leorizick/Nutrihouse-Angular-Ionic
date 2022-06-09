import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserDto } from '../../models/user.dto';
import { AuthService } from '../../services/auth.service';


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
      this.navCtrl.push("CategoriasPage");
    }


    profilePage(){
      this.navCtrl.push("ProfilePage");
    }

    produtosPage(){
      this.navCtrl.push("ProdutosPage")
    }

    logoutPage(){
      this.auth.logout();
      this.navCtrl.setRoot('HomePage');
    }

   
  
}
