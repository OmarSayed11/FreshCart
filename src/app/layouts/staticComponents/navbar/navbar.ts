import { Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MyPlatform } from '../../../core/services/myPlatform/my-platform';
import { Auth } from '../../../core/services/auth/auth';
import { CartService } from '../../../core/services/cart/cart.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private readonly router: Router = inject(Router);
  private readonly auth: Auth = inject(Auth);
  private readonly cartService: CartService = inject(CartService);
  mobileMenuOpen = false;
  isLogged = computed(() => this.auth.isLogged());
  numOfCartItems = computed(() => this.cartService.numberOfItems());
  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
  ngOnInit(): void {
    this.cartService.numberOfItems();
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    console.log('User logged Out Successfully');
    this.router.navigate(['/login']);
    this.auth.isLogged.set(false);
  }
}
