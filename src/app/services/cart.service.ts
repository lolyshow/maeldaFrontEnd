import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';

interface CartItem {
  name: string;
  price: number;
  dimension: string;
  quantity: number;
}
@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  private cartItems = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItems.asObservable();
  private cartApiUrl = 'http://localhost:5001/api/user/cart';
  private cartItemCount = new BehaviorSubject<number>(0);


  getCartCount(): Observable<number>{
    return this.cartItemCount.asObservable();
  }

  addToCart(payload:any): Observable<any> {
    console.log("calling",payload)
    // const payload = { productId, quantity };
    return this.http.post(this.cartApiUrl, payload);
  }

  getCartItems():void {
    this.http.get<{products:any[]}>(`${this.cartApiUrl}`, )
    .pipe(
      map((response)=>response?.products?.length),
      tap((count)=>this.cartItemCount.next(count))
    )
    .subscribe({
      error: (err) => console.error("Error fetching cart items", err)
    })
  }

  getCartTotal() {
    return this.cartItems.value.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }

  getCartItemCount() {
    return this.cartItems.value.reduce((acc, item) => acc + item.quantity, 0);
  }
}
