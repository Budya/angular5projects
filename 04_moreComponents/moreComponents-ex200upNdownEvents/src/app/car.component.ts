import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICar } from './icar';

@Component({
  selector: 'car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  @Input('theCar') car: ICar;
  @Output() carDelete = new EventEmitter();
  
  delete(car: ICar){
    this.carDelete.emit(car);
  }
}
