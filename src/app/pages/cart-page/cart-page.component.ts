import { Component,OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css',
})
export class CartPageComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.fetchCartItems();
    this.loadCart();
  }

  fetchCartItems() {
    this.cartService.fetchCartFromServer().subscribe({
      next: (response) => {
        this.cartItems = response.products;
      },
      error: (err) => {
        console.error('Error fetching cart items', err);
      },
    });
  }

  getTotal(): number {
    return this.cartItems.reduce(
      (acc, item) => acc + item.count * item.price,
      0
    );
  }


  loadCart() {
    this.cartService.fetchCartFromServer().subscribe({
      next: (res) => {
        this.cartItems = res.products;
      },
      error: (err) => console.error('Error loading cart', err),
    });
  }

  getItemTotal(item: any): number {
    return item.price * item.count;
  }


  increase(item: any) {
    item.count++;
    this.updateCart(item);
  }

  decrease(item: any) {
    if (item.count > 1) {
      item.count--;
      this.updateCart(item);
    }
  }

  remove(item: any) {
    this.cartItems = this.cartItems.filter(i => i._id !== item._id);
    // this.cartService.updateCart(this.cartItems).subscribe();
  }

  updateCart(item: any) {
    const payload = {
      cart: this.cartItems.map(i => ({
        _id: i._id,
        count: i.count
      }))
    };
    this.cartService.addToCart(payload).subscribe();
  }
}
