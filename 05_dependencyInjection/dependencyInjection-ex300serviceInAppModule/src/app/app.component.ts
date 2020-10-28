import { Component, Input, OnInit } from '@angular/core';

import { CarService } from './car.service';

@Component({
  selector: 'car',
  template: `
    <h3>
      {{name}} Is Supercharged: {{supercharged}}
    </h3>
  `,
  styles: [],
  providers: []
})
export class CarComponent implements OnInit{
  @Input() name;
  
  supercharged: string = '';
  constructor(private service: CarService){}

  ngOnInit(){
    this.supercharged = this.service.isSuperCharged(this.name);
  }
}

@Component({
  selector: 'app-root',
  template: `
    <car name="Ford GT"></car>
    <car name="Crovette Z06"></car>
    
  `,
  styles: [],
  providers: []
})
export class AppComponent {
  title = 'dependencyInjection-ex300appModuleLevelService';
}