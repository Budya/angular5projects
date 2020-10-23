import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    First input field: <input #firstInput />

  `,
  styles: []
})
export class AppComponent implements AfterViewInit {
  title = 'moreCoreComponents-ex1600';

  @ViewChild('firstInput') firstInput;

  ngAfterViewInit(){
    //ViewChild available here to set focus
    this.firstInput.nativeElement.focus();
  }
}
