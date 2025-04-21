import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);

  product: any;

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    this.http.get(`http://localhost:5001/api/products/${productId}`)
      .subscribe((data) => this.product = data);
  }
}
