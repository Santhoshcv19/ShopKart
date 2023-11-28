import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http:HttpClient){}
    getMessage(){
        return this.http.get('http://localhost:3000/api/message');
    }
    addNewUser(user: any) {
        return this.http.post('http://localhost:3000/api/signup', user);
    }
    getProductDetails(productId: number) {
        return this.http.get(`http://localhost:3000/api/products/${productId}`);
    }
    getallProductDetails() {
        return this.http.get(`http://localhost:3000/api/products/`);
    }
    getcategoryProductDetails(categoryId: number) {
        return this.http.get(`http://localhost:3000/api/get-product/${categoryId}`);
    }
}