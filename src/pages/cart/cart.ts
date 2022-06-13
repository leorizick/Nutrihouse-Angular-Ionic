import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartItem } from '../../models/cart-item';
import { ProdutoDto } from '../../models/produto.dto';
import { cartService } from '../../services/domain/cart.service';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public cartService : cartService) {
  }

  items: CartItem[]


  ionViewDidLoad() {
    let cart = this.cartService.getCart();
    this.items = cart.itens;
  }

  removeItem(produto: ProdutoDto){
    this.items = this.cartService.removeProduto(produto).itens;
  }

  increaseQuantity(produto: ProdutoDto){
    this.items = this.cartService.increaseQuantity(produto).itens;
  }

  decreaseQuantity(produto: ProdutoDto){
    this.items = this.cartService.decreaseQuantity(produto).itens;
  }

  total() : number {
    return this.cartService.total();
  }

  goOn(){
    this.navCtrl.setRoot("CategoriasPage")
  }



}
