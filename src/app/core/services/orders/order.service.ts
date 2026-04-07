import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Signal } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private readonly httpClient: HttpClient = inject(HttpClient);

  createCashOrder(cartId: string, data: object): Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}/api/v2/orders/${cartId}`, data);
  }
  checkOut(cartId: string, data: object): Observable<any> {
    return this.httpClient.post(
      `${environment.baseUrl}/api/v1/orders/checkout-session/${cartId}?url=${environment.currentServer}`,
      { shippingAddress: data },
    );
  }
}
