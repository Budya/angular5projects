import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    Search: <input type="text" (keyup)="onChange($event.target.value)"/>
    <div *ngFor="let log of _logs">
      Search: &nbsp;{{log}} 
    </div>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'rxjs-ex300debounce';

  _searchText: string;
  _searchSubject: Subject<string>;
  _logs: Array<string> = [];

  constructor() {
    //Create new Subject
    this._searchSubject = new Subject<string>();

    this._searchSubject.pipe(
      debounceTime(300)      
    ).pipe(
      distinctUntilChanged()
    ).subscribe(
      searchText => this._logs.push(searchText)
    );      
  }

  public onChange(searchText: string){
    this._searchSubject.next(searchText);
  }
  

}
