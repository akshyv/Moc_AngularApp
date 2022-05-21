import { Component } from '@angular/core';
import { HEROES } from '../mocks/mock'
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero? : Hero

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
}