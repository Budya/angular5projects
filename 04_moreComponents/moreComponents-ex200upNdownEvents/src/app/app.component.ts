import { Component } from '@angular/core';
import { ICar } from './icar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moreComponents-ex200upNdownEvents';
  
  cars: Array<ICar> = [
    {make: 'bmw', model: 'm3'},
    {make: 'porshe', model: '911'},
    {make: 'bmw', model: 'm3'}
  ];

  deleteCar(car: ICar){
    alert('Deleting car:' + JSON.stringify(car));
  }
}
