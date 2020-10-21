import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p *ngFor="let log of logs">
    {{log}}
    </p>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'moreComponents-ex1200';
  logs: Array<string> = [new Date() + ''];

  constructor(){
    for(let i=0; i<100000; i++){
      console.log(i);
    }
  }

  ngOnInit(){
    this.logs.push(new Date()+ '');
  }
}
