import { Component } from '@angular/core';

class Watch {
  getTime(): string{
    return new Date() + "";
  }
}

class Seico extends Watch {
  getTime(): string {
    return "Seico Time: " + super.getTime();
  }
}


@Component({
  selector: 'app-root',
  template: `
    <h1>
      {{watch.getTime()}}
    </h1>
    
  `,
  styles: [],
  providers: [{
    provide: Watch,
    useClass: Seico
  }]
})
export class AppComponent {
  title = 'dependencyInjection-ex350classProvider';
  constructor(public watch: Watch){}
}
