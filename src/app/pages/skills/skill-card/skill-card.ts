import { Component, Input, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-skill-card',
  imports: [CommonModule, CardModule, ChartModule],
  templateUrl: './skill-card.html',
  styleUrl: './skill-card.css',
})
export class SkillCard {
  @Input() title = '';
  @Input() skills: { name: string; value: number; color: string }[] = [];

  ngAfterViewInit() {
    setTimeout(() => {
      console.log('Animating skill card:', this.title, 'with skills:', this.skills);
    }, 100);
  }

}
