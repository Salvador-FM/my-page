import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class WindowService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  get window(): Window | null {
    return isPlatformBrowser(this.platformId) ? window : null;
  }

}
