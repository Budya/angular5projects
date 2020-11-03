import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes'; 
import { Observable, of} from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  private heroesUrl = 'api/heroes';

  constructor(private messageService: MessageService,
              private http: HttpClient) { }

  private log(message: string){
    this.messageService.add(`HeroService: ${message}`);
  }

 

  // getHeroes(): Observable<Hero[]>{
  //   this.messageService.add('HeroService: fetched heroes');
  //   return of(HEROES);
  // }

  //Get Heroes from fake api
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      tap(_ => this.log('fetched heroes via mock http')),
      catchError(this.handleError<Hero[]>('getGeroes', []))
    );
  }

  // getHero(id: number): Observable<Hero>{
  //   this.messageService.add(`HeroService: id=${id}`);
  //   return of(HEROES.find(hero => hero.id === id));
  // }

    getHero(id: number): Observable<Hero> {
      const url = `${this.heroesUrl}/${id}`;
      return this.http.get<Hero>(url).pipe(
        tap(_ => this.log(`fetched hero id = ${id}`)),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      );
    } 

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }
}
