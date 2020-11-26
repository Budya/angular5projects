import { Component } from '@angular/core';
import * as Rx from 'rxjs';
import { Observable, of } from 'rxjs'


@Component({
  selector: 'app-root',
  template: `
    
  `,
  styles: []
})
export class AppComponent {
  title = 'rxjs-ex100';

  constructor(){
    const array: Array<string> = ['event1', 'event2'];
    const observable: Observable<string[]> = of(array);
    const subsription: Rx.Subscription = observable.subscribe(
      //Observer
      function(x){
        console.log('Next: ' + x);
      },
      function(err) {
        console.log('Error: ' + err);
      },
      function(){
        console.log('Completed');
      }
    )

  }
}
