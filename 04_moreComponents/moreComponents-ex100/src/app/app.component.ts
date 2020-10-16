import { Component } from '@angular/core';
import { ICar } from './icar'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moreComponents-ex100';

  cars: Array<ICar> = [
    {make: 'bmw', model: 'm3'},
    {make: 'proshe', model: '911'},
    {make: 'bmw', model: 'm3'},
  ]
}
