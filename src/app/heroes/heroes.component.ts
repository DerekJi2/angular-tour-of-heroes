import { Component, OnInit } from '@angular/core';
import { Hero } from '../data/hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  componentPrefix = 'HeroesComponent: ';

  heroes: Array<Hero>;
  selectedHero: Hero;

  onSelect(hero: Hero) {
    console.log(hero);
    this.selectedHero = hero;
    this.messageService.add(this.componentPrefix + `Selected ${hero.name}`);
  }

  initHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.initHeroes();
  }

}
