import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ProductService } from '../../../core/services/products/product-service';
import { IProduct } from '../../../core/models/i-product';
import { Auth } from '../../../core/services/auth/auth';
import { CartService } from '../../../core/services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';
import { MyPlatform } from '../../../core/services/myPlatform/my-platform';

@Component({
  selector: 'app-featured-products',
  imports: [],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.css',
})
export class FeaturedProductsComponent implements OnInit {
  private readonly productService: ProductService = inject(ProductService);
  private readonly auth: Auth = inject(Auth);
  private readonly cartService: CartService = inject(CartService);
  private readonly toaster: ToastrService = inject(ToastrService);
  private readonly myPlatform = inject(MyPlatform);
  isLogged = computed(() => this.auth.isLogged());

  productList = signal<IProduct[]>([]);
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (res) => {
        this.productList.set(res.data);
      },
    });
  }
  addToCartAction(pId: any) {
    this.cartService.addToCart(pId).subscribe({
      next: (res) => {
        console.log(res);
        this.cartService.numberOfItems.set(res.numOfCartItems);
        if (this.myPlatform.checkBrowserPlatform()) {
          this.toaster.success(res.message, 'Fresh Cart');
        }
        console.log('added to cart successfully');
      },
    });
  }
}
