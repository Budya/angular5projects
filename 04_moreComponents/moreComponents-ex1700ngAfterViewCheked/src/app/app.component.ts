import { AfterViewChecked, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input [(ngModel)]="input"/>
    <br/>
    {{input}}
    <br/>
    <div #message></div>        
  `,
  styles: []
})
export class AppComponent implements AfterViewChecked {
  title = 'moreComponents-ex1700ngAfterViewCheked';
  input: string = '';


  @ViewChild('message') message;
  
  ngAfterViewChecked(){
    console.log('AfterViewChecked');
    if(isNaN(parseInt(this.input))){
      this.message.nativeElement.innerHTML = "Input not numeric.";
    } else {
      this.message.nativeElement.innerHTML = "Input is numeric.";
    }
  }

}
