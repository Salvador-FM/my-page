import { Injectable, inject } from '@angular/core';
import { WindowService } from './window-service';
import { LocalStorageService } from './local-storage-service';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private windowService = inject(WindowService);
  private storage = inject(LocalStorageService);

  initTheme(): Theme {

    let theme = this.storage.getItem('theme') as Theme | null;

    if (!theme) {
      theme = this.getSystemTheme();
      this.storage.setItem('theme', theme);
    }

    this.applyTheme(theme);

    return theme;
  }

  setTheme(theme: Theme) {
    this.storage.setItem('theme', theme);
    this.applyTheme(theme);
  }

  toggleTheme() {
    const current = this.storage.getItem('theme') as Theme;
    const next = current === 'dark' ? 'light' : 'dark';

    this.setTheme(next);
  }

  private getSystemTheme(): Theme {

    const win = this.windowService.window;

    if (!win) return 'light';

    const prefersDark = win.matchMedia('(prefers-color-scheme: dark)').matches;

    return prefersDark ? 'dark' : 'light';
  }

  private applyTheme(theme: Theme) {

    const win = this.windowService.window;

    if (!win) return;

    win.document.documentElement.setAttribute('data-theme', theme);
  }

}