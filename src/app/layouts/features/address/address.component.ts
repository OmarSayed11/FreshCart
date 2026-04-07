import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../../core/services/orders/order.service';

@Component({
  selector: 'app-address',
  imports: [ReactiveFormsModule],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css',
})
export class AddressComponent {
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private readonly fb: FormBuilder = inject(FormBuilder);
  private readonly orderService: OrderService = inject(OrderService);
  cartId = signal<string>('');
  addressForm: FormGroup = this.fb.group({
    details: [null, [Validators.required]],
    phone: [null, [Validators.required]],
    city: [null, [Validators.required]],
  });
  ngOnInit(): void {
    this.getCartIdFromUrl();
  }
  getCartIdFromUrl() {
    this.activatedRoute.paramMap.subscribe({
      next: (res) => {
        this.cartId.set(res.get('id')!);
      },
    });
  }
  addressSubmit(event: any) {
    if (event.submitter.value == 'cash') {
      this.orderService.createCashOrder(this.cartId(), this.addressForm.value).subscribe({
        next: (res) => {
          console.log(res);
        },
      });
    } else if (event.submitter.value == 'visa') {
      this.orderService.checkOut(this.cartId(), this.addressForm.value).subscribe({
        next: (res) => {
          window.open(res.session.url);
        },
      });
    }
  }
}
