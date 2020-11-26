import { Component } from '@angular/core';
import { Observable, range, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    
    
  `,
  styles: []
})
export class AppComponent {
  title = 'rxjs-ex200rxOperators';
  constructor(){
    const observable: Observable<number> = range(0,100);
    const subscription: Subscription = observable
            .subscribe(
              //Observer
              val => { console.log(`Next: ${val}`)},
              err => { console.log(`Error: ${err}`)},
              () => {console.log('Completed')}
            );
  }

}
