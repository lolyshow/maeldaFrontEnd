import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {

  constructor(private router: Router) {}

  @Input() product!: { name: string; price: number; _id: string }; // Product details from parent
  @Output() cartUpdate = new EventEmitter<{ product: any; quantity: number }>();

  quantity: number = 1;

  viewMore(id: string) {
    this.router.navigate(['/products', id]);
  }

  addToCart() {
    this.cartUpdate.emit({ product: this.product, quantity: this.quantity });
  }
}
