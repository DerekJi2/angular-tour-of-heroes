import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from './data/hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  servicePrefix = 'HeroService: ';
  private heroesUrl = 'api/heroes';

  getHeroes(): Observable<Array<Hero>> {
    this.messageService.clear();
    this.log('fetching heroes');
    // return of(HEROES);
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    this.log(`fetching hero id=${id}`);

    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url);
  }

  private log(message: string) {
    this.messageService.add(this.servicePrefix + message);
  }
}

