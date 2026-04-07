import { Component, inject, signal } from '@angular/core';
import { CartService } from '../../../core/services/cart/cart.service';
import { ICartProduct } from '../../../core/models/icart-product';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  private readonly cartService: CartService = inject(CartService);
  private readonly toaster: ToastrService = inject(ToastrService);
  cartList = signal<ICartProduct[]>([]);
  totalCartPrice = signal<number>(0);
  cartId = signal<string>('');
  ngOnInit(): void {
    this.getUserCart();
  }
  getUserCart() {
    this.cartService.getLoggedUserCart().subscribe({
      next: (res) => {
        console.log(res);
        this.cartId.set(res.cartId);
        this.cartList.set(res.data.products);
        this.totalCartPrice.set(res.data.totalCartPrice);
        this.cartService.numberOfItems.set(res.numOfCartItems);
      },
    });
  }
  deleteProduct(productId: string) {
    this.cartService.deleteProduct(productId).subscribe({
      next: (res) => {
        console.log('product deleted successfully', res);
        this.cartService.numberOfItems.set(res.numOfCartItems);

        this.toaster.success(res.message, 'Fresh Cart');
        this.totalCartPrice.set(res.data.totalCartPrice);
        this.cartList.set(res.data.products);
      },
    });
  }
  editQ(productId: string, count: number) {
    if (count == 0) {
      return this.deleteProduct(productId);
    }
    this.cartService.updateProductQuantity(productId, count).subscribe({
      next: (res) => {
        console.log(res);
        this.toaster.success(res.message, 'Fresh Cart');
        this.totalCartPrice.set(res.data.totalCartPrice);
        this.cartList.set(res.data.products);
      },
    });
  }
  deleteCartItems() {
    this.cartService.clearCartItems().subscribe({
      next: (res) => {
        console.log(res);
        this.toaster.success(res.message, 'Fresh Cart');
        this.totalCartPrice.set(res.data.totalCartPrice);
        this.cartList.set(res.data.products);
      },
    });
  }
}
