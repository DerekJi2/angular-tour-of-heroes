import { Injectable } from '@angular/core';
import { HEROES } from './mock/heroes';
import { Hero } from './data/hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  servicePrefix = 'HeroService: ';

  getHeroes(): Observable<Array<Hero>> {
    this.messageService.clear();
    this.messageService.add(this.servicePrefix + 'fetching heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(this.servicePrefix + `fetching hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}

