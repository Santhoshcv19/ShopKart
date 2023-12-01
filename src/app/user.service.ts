import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http:HttpClient) { }
  private username: string | null = null;
  private phone: string | null = null;
  private email: string | null = null;
  private Data: any[] = [];

  fetchdata(){
    return this.http.get(`${this.apiUrl}/api/message`);
  }

  setUsername(username: string): void {
    this.username = username;
  }

  setPhone(phone: string): void {
    this.phone = phone;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  getUsername(): string | null {
    return this.username;
  }

  getPhone(): string | null {
    return this.phone;
  }

  getEmail(): string | null {
    return this.email;
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
