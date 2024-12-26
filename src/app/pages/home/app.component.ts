import { CartService } from './../../services/cart.service';
import { Component, ViewChild } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ButtonComponent } from '../../components/button/button.component';
import { CommonModule } from '@angular/common';
import { CartModalComponent } from '../../cart-modal/cart-modal.component';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    // RouterOutlet,
    HeroComponent,
    ButtonComponent,
    CommonModule,
    CartModalComponent,
    ProductCardComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class HomeComponent {

  products: any[] = [];
  cartCount: number = 0;

  constructor(private productService: ProductService, private router: Router, private cartService: CartService, private loginService: AuthService ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });

    this.loginService.getCartItems().subscribe((data)=>{
      console.log("myData",data)
    })

    this.cartService.getCartCount().subscribe((count)=>{
      this.cartCount = count;
    })

    this.cartService.getCartItems();
    // this.cartService.getCartTotalItemsgetProducts().subscribe((data) => {
    //   this.products = data;
    // });
  }

  title = 'maeldaFrontEnd';
  @ViewChild('cartModal') cartModal!: CartModalComponent;

  dummyProduct = [
    {
      id: 1,
      name: 'Meat',
      image: '',
      rating: 4,
    },
    {
      id: 2,
      name: 'Meat',
      image: '',
      rating: 4,
    },
    {
      id: 3,
      name: 'Meat',
      image: '',
      rating: 4,
    },
    {
      id: 4,
      name: 'Meat',
      image: '',
      rating: 4,
    },
  ];


  addToCart(event: any) {
    // Logic to add the product to the cart
      const payload = {
        cart: [
          {
            _id: event.product._id,
            count: event?.quantity
          }
        ]
      };
      // this.cartService.addToCart(payload).subscribe({
      //   next: (response) => {
      //     console.log('Product added to cart:', response);
      //   },
      //   error: (error) => {
      //     console.log('Product added to cart:', error);
      //   }
      // });

      this.loginService.addToCart(payload).subscribe({
      next: (response) => {
        console.log('Product added to cart:', response);
      },
      error: (error) => {
        console.error('Error adding product to cart:', error);
        // this.router.navigate(['/login']);
      }
    });

    // Show the cart modal
    this.cartModal.show();
  }

  // Navigate to product details on click
  goToProductDetails(productId: number) {
    this.router.navigate(['/products', productId]);
  }
}
