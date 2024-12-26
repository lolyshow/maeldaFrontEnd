import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from "../components/button/button.component";

@Component({
  selector: 'app-cart-modal',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './cart-modal.component.html',
  styleUrl: './cart-modal.component.css'
})
export class CartModalComponent {
  isVisible = false;

  show() {
    this.isVisible = true;

    // Automatically hide the modal after a few seconds (optional)
    // setTimeout(() => {
    //   this.isVisible = false;
    // }, 3000);
  }

  hide() {
    this.isVisible = false;
  }

  continueShopping() {
    // Logic for continuing shopping
    this.hide();
  }

  proceedToCheckout() {
    // Logic for proceeding to checkout
    this.hide();
  }
}
