import { Routes } from '@angular/router';
import { HomeComponent } from './layouts/features/home/home.component';
import { ShopComponent } from './layouts/features/shop/shop.component';
import { CategoriesComponent } from './layouts/features/categories/categories.component';
import { BrandsComponent } from './layouts/features/brands/brands.component';
import { CartComponent } from './layouts/features/cart/cart.component';
import { WishlistComponent } from './layouts/features/wishlist/wishlist.component';
import { LoginComponent } from './layouts/features/login/login.component';
import { RegisterComponent } from './layouts/features/register/register.component';
import { ForgetpasswordComponent } from './layouts/features/forgetpassword/forgetpassword.component';
import { NotfoundComponent } from './layouts/features/notfound/notfound.component';
import { authGuard } from './core/guards/auth/auth-guard';
import { AddressComponent } from './layouts/features/address/address.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  {
    path: 'categories',
    loadComponent: () =>
      import('./layouts/features/categories/categories.component').then(
        (r) => r.CategoriesComponent,
      ),
  },
  { path: 'brands', component: BrandsComponent },
  { path: 'cart', canActivate: [authGuard], component: CartComponent },
  { path: 'wishlist', canActivate: [authGuard], component: WishlistComponent },
  { path: 'checkout/:id', canActivate: [authGuard], component: AddressComponent },
  {
    path: 'settings',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./core/module/settings/settings-module').then((r) => r.SettingsModule),
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgetPassword', component: ForgetpasswordComponent },
  { path: '**', component: NotfoundComponent },
];
