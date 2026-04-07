import { HttpInterceptorFn } from '@angular/common/http';
import { MyPlatform } from '../../services/myPlatform/my-platform';
import { inject } from '@angular/core';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  let myPlatormService: MyPlatform = inject(MyPlatform);

  if (myPlatormService.checkBrowserPlatform()) {
    const token = localStorage.getItem('token');
    if (token) {
      req = req.clone({
        setHeaders: {
          token: token,
        },
      });
    }
  }
  return next(req);
};
