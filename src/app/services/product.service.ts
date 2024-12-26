import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:5001/api/product/';

  constructor(private http: HttpClient) {}

  // Method to get all products
  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Method to get a single product by id
  getProductById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
