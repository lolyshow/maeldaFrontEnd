import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ButtonComponent,FormsModule,CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: { name: string; price: number }; // Product details from parent
  @Output() cartUpdate = new EventEmitter<{ product: any; quantity: number }>();

  quantity: number = 1;

  addToCart() {
    this.cartUpdate.emit({ product: this.product, quantity: this.quantity });
  }
}
