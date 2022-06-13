import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutoDto } from '../../models/produto.dto';
import { ProdutoService } from '../../services/domain/produto.service';

/**
 * Generated class for the ProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {

  items: ProdutoDto[];

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public produtoService: ProdutoService) {
  }

  ionViewDidLoad() {
    let categoria_id = this.navParams.get('categoria_id');
    if(categoria_id != null){
    this.produtoService.findAllPerCategorias(categoria_id)
    .subscribe(response => {
      this.items = response;
    },
  
    error => {}); 

}
else{
  this.produtoService.findAll()
  .subscribe(response => {
    this.items = response;
  },
  error => {});
}
  }

  showDetails(produto_id : string){
    this.navCtrl.push('ProdutoDetailPage', {produto_id : produto_id});
  }

}
