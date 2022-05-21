import { Component, OnInit } from '@angular/core';
import { HEROES } from '../hero.service';
import { Hero } from '../hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';


@Component({
  selector: 'my-heroes',
  templateUrl: './heroes-component.component.html',
  styleUrls: ['./heroes-component.component.scss'],
  providers: [HeroService]  
})
export class HeroesComponentComponent implements OnInit {
  constructor(private heroService: HeroService){

  }
  ngOnInit(): void {
    this.heroService.getHeroes().then(res => 
      this.heroes = res)    
  } 
  heroes?: Hero[]
  selectedHero? : Hero
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
}