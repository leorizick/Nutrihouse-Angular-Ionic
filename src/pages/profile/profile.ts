import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserDto } from '../../models/user.dto';
import { UserService } from '../../services/domain/user.service';
import { StorageService } from '../../services/storage.service';

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
     public userService : UserService
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
    .subscribe(Response => {this.user.imageUrl= `assets/imgs/${this.user.id}.jpg`;
  },
  error => {});
  }
}
