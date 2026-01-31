import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackgroundWave } from '../../shared/background-wave/background-wave';
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-main-layout',
  imports: [
    BackgroundWave,
    Navbar,
    Footer,
    RouterOutlet
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {

}
