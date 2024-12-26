import { Component } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";
// import { CartModalComponent } from "../../cart-modal/cart-modal.component";
// import { HeroComponent } from "../../components/hero/hero.component";
// import { ButtonComponent } from "../../components/button/button.component";
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-produt-detail',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './produt-detail.component.html',
  styleUrl: './produt-detail.component.css'
})
export class ProdutDetailComponent {
  addToCart() {

    throw new Error('Method not implemented.');
  }

}
