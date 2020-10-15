import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['div.box {width: 200px; padding: 20px; margin: 20px; border: 1px solid black; color: white; background-color: green;'],
})
export class AppComponent {
  title = 'directives-ex100';
  showName: boolean = true;

  toggle(){
    this.showName = !this.showName;
  }
}
