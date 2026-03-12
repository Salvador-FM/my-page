import { NgOptimizedImage } from '@angular/common';
import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
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

  toggleMenu() {
    this.isMenuOpen.update(open => !open);
  }
}
