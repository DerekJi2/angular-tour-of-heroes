import { Component, OnInit } from '@angular/core';
import { Hero } from '../data/hero';
import { HEROES } from '../mock/heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  heroes: Array<Hero> = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero) {
    console.log(hero);
    this.selectedHero = hero;
  }

  ngOnInit() {
  }

}
