import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http:HttpClient) { }
  private username: string | null = null;
  private Data: any[] = [];

  fetchdata(){
    return this.http.get(`${this.apiUrl}/api/message`);
  }

  setUsername(username: string): void {
    this.username = username;
  }

  getUsername(): string | null {
    return this.username;
  }

  isLoggedIn(): boolean {
    return !!this.username;
  }

  selectedProduct: any;

  setSelectedProduct(product: any) {
    this.selectedProduct = product;
  }

  getSelectedProduct() {
    return this.selectedProduct;
  }
}
