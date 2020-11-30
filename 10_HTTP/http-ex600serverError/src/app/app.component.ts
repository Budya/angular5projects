import { Component } from '@angular/core';
import { Service } from './service';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li *ngFor="let post of _posts">
        <b>{{post.title}}: </b> {{post.body}}
      </li>
    </ul>
    <div *ngIf="_error">
      Error: {{_error.status}}: {{_error.statusText}}
    </div>    
  `,
  styles: [
    'div {font-size=20px; padding: 5px; background-color: red; color: white}'
  ]
})
export class AppComponent {
  title = 'http-ex600serverError';

  _posts = [];
  _error;

  constructor(private _service: Service){

  }

  ngOnInit(){
    this._service.getPosts().subscribe(
      resp=> {
        this._posts = resp;
      },
      error => {
        this._error = error;
      }
    );
  }
}
