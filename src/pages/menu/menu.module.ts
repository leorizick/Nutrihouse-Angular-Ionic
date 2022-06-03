import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuPages } from './menu';

@NgModule({
  declarations: [
    MenuPages,
  ],
  imports: [
    IonicPageModule.forChild(MenuPages),
  ],
})
export class MenuPageModule {}
