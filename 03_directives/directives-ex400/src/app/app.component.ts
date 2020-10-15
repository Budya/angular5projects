import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives-ex400';

  selectedAnimal = 'cat';
  animals = [
              'cat',
              'dog',
              'zebra',
              'giraffe'
            ];

  onAnimalClicked(event: Event){
   
    const el = event.target as HTMLElement;
    const clickedAnimal = el.innerHTML.trim();
    this.selectedAnimal = clickedAnimal;
  }
}
