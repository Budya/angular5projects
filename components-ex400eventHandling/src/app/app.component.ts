import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <input #input type="text" (input)="textInput($event)"
  value=""/>
  <hr>
  Upper-case: {{upperCase}}
  <br/>
  Lower-case: {{lowerCase}}
  `,
  styles: [],
})
export class AppComponent implements AfterViewInit{
  upperCase: string='';
  lowerCase: string='';
  @ViewChild('input') inputBox;

  textInput(event){
    this.upperCase = event.target.value.toUpperCase();
    this.lowerCase = event.target.value.toLowerCase();
  }

  ngAfterViewInit() {
    this.inputBox.nativeElement.focus();
  }

}