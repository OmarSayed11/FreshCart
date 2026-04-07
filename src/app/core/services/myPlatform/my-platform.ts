import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyPlatform {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  checkBrowserPlatform(): boolean {
    return isPlatformBrowser(this.platformId) ? true : false;
  }
}
