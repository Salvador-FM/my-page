import { Component } from '@angular/core';
import { BackgroundWave } from '../../shared/background-wave/background-wave';

@Component({
  selector: 'app-home',
  imports: [
    BackgroundWave
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
