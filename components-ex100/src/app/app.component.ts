import { Component } from '@angular/core';

@Component({
  selector: 'app-root', 
  template: `
  <h1>
    {{title}}
  </h1>
  <p>
    Length: {{title.length}}
  </p>
  <p>Reversed: {{getReversed(title)}}</p>

  <br><br>
  <hr>
  <h1>Doesn't worck:</h1>
  <img src="starUrl">
  <h1>Works fine:</h1>
  <img [src]="starUrl">
  `,
  styles: []
})
export class AppComponent {
  title = 'welcome to app!';
  starUrl = 'https://developer.mozilla.org/samples/cssref/images/starsolid.gif';
  

  getReversed(str: string){
    let reversed = '';
    for(let i=str.length-1; i>=0; i--){
      reversed += str.substring(i, i+1);
    }
    return reversed;
  }


}