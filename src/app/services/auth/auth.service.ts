import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:5001/api/user/login';  // Replace with your login API URL
  private endPoint = 'http://localhost:5001/api/user/';  // Replace with your login API URL
  private tokenKey = 'authToken'; // Key to store token in local storage
  private refreshTokenKey = 'refreshToken'; // Key to store refresh token

  constructor(private http: HttpClient) {}

  // Login and return tokens
  login(email: string, password: string): Observable<any> {
    console.log("HOllaHollaHolla",email)
    return this.http.post(this.loginUrl, { email, password });
  }


  // Save tokens after login
  saveTokens(token: string, refreshToken: string) {
    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem(this.refreshTokenKey, refreshToken);
  }

  // Get access token
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Get refresh token
  getRefreshToken(): string | null {
    return localStorage.getItem(this.refreshTokenKey);
  }

  // Logout and clear tokens
  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.refreshTokenKey);
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return !!this.getToken();
  }



  addToCart(payload:any): Observable<any> {
    // const payload = { productId, quantity };
    const authToken = this.getToken();
    const refreshToken = this.getRefreshToken();

    if (!authToken || !refreshToken) {
      throw new Error('User is not authenticated');
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`,
      'Cookie': `refreshToken=${refreshToken}`
    });
    const options = { headers };

    return this.http.post(this.endPoint+'cart', payload,options);
  }

  getCartItems(): Observable<number> {
    const authToken = this.getToken();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`,
    });

    const options = { headers };

    return this.http.get<number>(`${this.endPoint}/cart`);
  }

}
