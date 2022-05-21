import { Component, OnInit } from '@angular/core';
import { HeroesComponentComponent } from './heroes-component/heroes-component.component';

@Component({
  selector: 'my-app',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}
  title = 'Tour of Heroes';  
}