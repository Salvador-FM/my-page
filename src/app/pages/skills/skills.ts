import { Component } from '@angular/core';
import { SkillCard } from './skill-card/skill-card';

export interface Skill {
  name: string;
  value: number; // 0 - 100
  color: string;
}

@Component({
  selector: 'app-skills',
  imports: [SkillCard],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})

export class Skills {

  frontendSkills = [
    { name: 'Angular', value: 90, color: '#39ff14' },
    { name: 'TypeScript', value: 85, color: '#7c7cff' },
    { name: 'HTML/CSS', value: 80, color: '#00c9a7' }
  ];

  // backendSkills = [
  //   { name: 'Java', value: 80, color: '#7c7cff' },
  //   { name: 'Node', value: 75, color: '#39ff14' }
  // ];


}
