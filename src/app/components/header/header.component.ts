import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() cartCount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Subscribe to cart count updates
    this.cartService.getCartCount().subscribe((count)=>{
      this.cartCount = count;
      console.log("CartCounter",count)
    });
    this.cartService.getCartItems(); // call once to populate on page load
  }
}
