import { ProductService } from './../../services/product.service';
import { Component, inject } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";
import { HeroComponent } from "../../components/hero/hero.component";
// import { CartModalComponent } from "../../cart-modal/cart-modal.component";
// import { HeroComponent } from "../../components/hero/hero.component";
// import { ButtonComponent } from "../../components/button/button.component";
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [HeaderComponent, HeroComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);

  constructor(private productService: ProductService) {}

  product: any;

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id') ?? "";
    // this.http.get(`http://localhost:5001/api/product/${productId}`)
    //   .subscribe((data) => this.product = data);

      this.productService.getProductById(productId).subscribe((data) => {
        this.product = data;
      });
  }


  addToCart() {

    throw new Error('Method not implemented.');
  }

}
