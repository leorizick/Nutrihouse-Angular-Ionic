import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroCategoriasPage } from './cadastro-categorias';

@NgModule({
  declarations: [
    CadastroCategoriasPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroCategoriasPage),
  ],
})
export class CadastroCategoriasPageModule {}
