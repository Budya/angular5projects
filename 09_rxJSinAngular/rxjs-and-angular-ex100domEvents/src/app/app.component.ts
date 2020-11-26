import { Component } from '@angular/core';
import { fromEvent, merge, Observable } from 'rxjs';
import { bufferTime, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    Search: <input type="text"/>
    <div *ngFor="let log of _logs">
      Search: &nbsp; {{log}} 
    </div>    
  `,
  styles: []
})
export class AppComponent {
  title = 'rxjs-and-angular-ex100domEvents';

  _logs: Array<string> = [];

  constructor(){
    const observable: Observable<any> =
    merge(
      fromEvent(document, 'keydown'),
      fromEvent(document, 'click'),
      fromEvent(document, 'mousemove'),
      fromEvent(document, 'scroll'),
      fromEvent(document, 'touchstart')      
    );

    const idleEventObservable = observable.pipe(
      bufferTime(5000),
      filter(function(arr){
        return arr.length===0;
      })
    ).subscribe(
      idleEvent => this._logs.push('idle')
    );    
  }
}
