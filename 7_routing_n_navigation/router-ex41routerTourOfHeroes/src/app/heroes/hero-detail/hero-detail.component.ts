import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { switchMap } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero$: Observable<Hero>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService
  ) { }

  ngOnInit() {
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => 
      this.service.getHero(params.get('id')))
    );    
  }

  gotoHeroes(hero: Hero){
    const heroId = hero ? hero.id : null;
    this.router.navigate(['/superheroes', {id: heroId}]);
  }

}