import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div style="padding:10px">
    <h2>Please select your pizza:</h2>
    <div [(ngModel)]="model" ngbRadioGroup name="radioBasic">
      <label ngbButtonLabel class="btn btn-primary">
      <input ngbButton type="radio" value="Hawaiian"> Hawaiian
      </label>
      <label ngbButtonLabel class="btn btn-primary">
      <input ngbButton type="radio" value="Peperoni"> Peperoni
      </label>
      <label ngbButtonLabel class="btn btn-primary">
      <input ngbButton type="radio" value="Everything"> Everything
      </label>
    </div>
    <hr>
    Your Selection: {{model}}
    </div>


    
  `,
  styles: []
})
export class AppComponent {
  title = 'widgets-ex100';
  model = 'Hawaiian';
}
