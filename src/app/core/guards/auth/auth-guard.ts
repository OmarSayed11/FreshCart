import { CanActivateFn, Router } from '@angular/router';
import { MyPlatform } from '../../services/myPlatform/my-platform';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  let router: Router = inject(Router);
  let myPlatform: MyPlatform = inject(MyPlatform);
  if (myPlatform.checkBrowserPlatform()) {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return router.createUrlTree(['/login']);
    }
  }
  return true;
};
