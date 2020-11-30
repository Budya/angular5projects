import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <div>
      Title:
      <br>
      <input type="text" [(ngModel)] = "_title" size="50">
      <br>
      <br>
      Body:
      <br>
      <textarea cols="50" rows="2" [(ngModel)]="_body"></textarea>
      <br>
      <button (click)="onAdd()">Add</button>    
    </div>
    <p><b>You Added:</b></p>
    <p *ngIf="_added.length === 0">None</p>
    <p *ngFor="let added of _added">
      {{added.title}}
    </p>  
  `,
  styles: ['div {padding: 20px; background-color: #c0c0c0}']
})
export class AppComponent {
  _title: string;
  _body: string;
  _added: Array<any> = new Array<any>();

  constructor(private _http: HttpClient){}

  onAdd(){
    const requestBody = {
      title: this._title || '[Unspecified]',
      body: this._body || '[Unspecified]',
    };

    this._http.post(`http://jsonplaceholder.typicode.com/posts`, 
    requestBody).subscribe(
      res=> {
        this._added.push(res);
      }
    )
  }
}
