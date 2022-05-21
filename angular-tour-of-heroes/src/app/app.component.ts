import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mocks/mock'
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  constructor(private heroService: HeroService){

  }
  ngOnInit(): void {
    this.heroService.getHeroes().then(res => 
      this.heroes = res)    
  }

  title = 'Tour of Heroes';
  heroes?: Hero[]
  selectedHero? : Hero
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
}