import { Component } from '@angular/core';
import { JsonPipe, UpperCasePipe } from '@angular/common';
//used for input
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common'
import { Hero } from '../hero'
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [NgFor, NgIf, JsonPipe, UpperCasePipe, FormsModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})

export class HeroesComponent {
  heroes = HEROES;

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
