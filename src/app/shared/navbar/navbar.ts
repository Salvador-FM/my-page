import { NgOptimizedImage } from '@angular/common';
import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage-service';
import { LucideAngularModule, SunMoonIcon } from 'lucide-angular';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-navbar',
  imports: [NgOptimizedImage, LucideAngularModule, ButtonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class Navbar {

  readonly SunMoonIcon = SunMoonIcon;

  isMenuOpen = signal(false);
  isDarkMode = signal<boolean>(false);

  constructor(private localStorageService: LocalStorageService) {
    // read the stored theme; default to light when missing
    const stored = this.localStorageService.getItem('theme');
    this.isDarkMode.set(stored === 'dark');
  }

  toggleMenu() {
    this.isMenuOpen.update(open => !open);
  }

  toggleMode() {
    this.isDarkMode.update(mode => {
      const newMode = !mode;
      // store a descriptive string instead of a boolean
      const themeValue = newMode ? 'dark' : 'light';
      this.localStorageService.setItem('theme', themeValue);
      return newMode;
    }); 
  }
}
