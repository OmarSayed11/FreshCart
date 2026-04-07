import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly httpClient: HttpClient = inject(HttpClient);
  numberOfItems = signal<number>(0);

  addToCart(pId: any): Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}/api/v2/cart`, { productId: pId });
  }
  getLoggedUserCart(): Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}/api/v2/cart`);
  }
  deleteProduct(productId: string): Observable<any> {
    return this.httpClient.delete(`${environment.baseUrl}/api/v2/cart/${productId}`);
  }
  updateProductQuantity(productid: string, count: number): Observable<any> {
    return this.httpClient.put(`${environment.baseUrl}/api/v2/cart/${productid}`, {
      count: count,
    });
  }
  clearCartItems(): Observable<any> {
    return this.httpClient.delete(`${environment.baseUrl}/api/v2/cart`);
  }
}
