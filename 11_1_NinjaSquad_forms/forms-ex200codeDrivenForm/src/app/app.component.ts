import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms-ex200codeDrivenForm';
  
  usernameCtrl: FormControl;
  passwrodCtrl: FormControl;
  userForm: FormGroup;

  constructor(fb: FormBuilder){
    this.usernameCtrl = fb.control('',[Validators.required,Validators.minLength(3)]);
    this.passwrodCtrl = fb.control('',[Validators.required]);
    this.userForm = fb.group({
      username: this.usernameCtrl,
      password: this.passwrodCtrl
    });
  }

  //Update from component
  reset(){
    this.usernameCtrl.setValue('');
    this.passwrodCtrl.setValue('');
  }

  register(): void{
    console.log(JSON.stringify(this.userForm.value));
  }
}
