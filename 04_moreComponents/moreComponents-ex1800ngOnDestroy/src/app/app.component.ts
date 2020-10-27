import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      {{count}}
    </h1>
    
  `,
  styles: []
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'moreComponents-ex1800ngOnDestroy';

  interval;
  count = 0;

  comp = this;

  ngOnInit(){
    this.interval = setInterval(()=> {
      this.count++;
    })
    //imitation of ngOnDestroy
    setTimeout(() => {
      clearInterval(this.interval);
      delete this.interval;
    }, 5000)
  }
  ngOnDestroy(){
    clearInterval(this.interval);
    delete this.interval;
  }  
  
}
