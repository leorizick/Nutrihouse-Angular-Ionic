import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { isFunctionDeclaration } from 'typescript';
import { UserDto } from '../../models/user.dto';
import { UserService } from '../../services/domain/user.service';
import { StorageService } from '../../services/storage.service';
import { HomeModule } from '../home/home.module';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public user : UserDto;

  email: string;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public storage : StorageService,
     public userService : UserService,
     public alertCtrl: AlertController
     ) {
  }


  ionViewDidLoad() {
    let localUser = this.storage.getLocalUser();
    if(localUser && localUser.username){
      this.userService.findByUsername(localUser.username)
      .subscribe(response => {this.user = response;
        this.getImageIfExists()
       
      },
      error => {
        if (error.status == 403){
          this.navCtrl.setRoot('HomePage');
        }
      });
    }
    else{
      this.navCtrl.setRoot('HomePage');
    }
  }

  getImageIfExists(){
    this.userService.getImageFromLocal(this.user.id)
    .subscribe(response => {this.user.imageUrl= `assets/imgs/${this.user.id}.jpg`;
  },
  error => {});
  }

  signup(){
    if (this.user.perfis == "ADMIN"){
    this.navCtrl.push('SignupPage');
  }
  else{
    let alert =  this.alertCtrl.create({
      title: 'Acesso negado!',
      message: "Somente o ADMIN pode cadastrar novos funcionarios!",
      enableBackdropDismiss: false,
      buttons: [
          {
              text: 'Ok'
      }
      ]
  });
  alert.present();
  }
}

}
