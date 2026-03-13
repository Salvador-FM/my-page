import { NgOptimizedImage } from '@angular/common';
import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { ThemeService } from '../../services/theme-service';
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

  constructor(private themeService: ThemeService) {
    // initialise theme via service (handles storage & application)
    const initial = this.themeService.initTheme();
    this.isDarkMode.set(initial === 'dark');
  }

  toggleMenu() {
    this.isMenuOpen.update(open => !open);
  }

  toggleMode() {
    // flip theme via service; it also persists & updates document
    this.themeService.toggleTheme();
    // keep the signal in sync for UI binding
    this.isDarkMode.update(mode => !mode);
  }
}
