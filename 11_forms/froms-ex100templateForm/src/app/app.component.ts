import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form #f="ngForm" novalidate>
      <p>First Name <input name="fname" ngModel #fname="ngModel" required/></p>
      <h2>Form Template Variable</h2>
      Valid fname: {{fname.valid}}
      Data: {{ fname.value | json }}
      <div>
      <h2>Form Instance Variable</h2>
      
      Valid fname2: {{fname.valid }}
      Data: {{ fname.value | json  }}
      
      </div>
      <button type="button" (click)="show()">Show</button>
    </form>
  `,
  styles: []
})
export class AppComponent {
  title = 'froms-ex100templateForm';
  @ViewChild('f') f: NgForm; 
  // if use fname2 instance in view - get error 
  @ViewChild('fname') fname2: FormControl;

  show(){
   // console.log(this.fname2);
    console.log(this.fname2.value)
  }
}
