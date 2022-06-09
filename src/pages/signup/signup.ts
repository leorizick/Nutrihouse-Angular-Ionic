import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../services/domain/user.service';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
      public menu: MenuController,
      public formBuilder: FormBuilder,
      public userService: UserService,
      public alertCtrl: AlertController){
      this.formGroup = this.formBuilder.group({
        name: ['', [Validators.maxLength(30)]],
        username: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        perfil: ['', [Validators.required]]
      });
    }
       
  

  signupUser(){
    console.log(this.formGroup.value);
    this.userService.insert(this.formGroup.value)
    .subscribe(response => {
      this.showInsertOk();
    },
    error => {});
  }

  showInsertOk() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      message: 'Cadastro efetuado com sucesso',
      enableBackdropDismiss: false,
      buttons:[
        {
        text: 'Ok',
        handler: () => {
          this.navCtrl.pop();
        }
      }
      ]
    });
    alert.present();
  }

  ionViewWillEnter(){
    this.menu.swipeEnable(false);
  }

  ionViewWillLeave(){
    this.menu.swipeEnable(true);
   
  }
}
