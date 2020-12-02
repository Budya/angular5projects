import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms-ex200codeDrivenForm';
  
  usernameCtrl: FormControl;
  passwrodCtrl: FormControl;
  birthdateCtrl: FormControl;
  userForm: FormGroup;

  constructor(fb: FormBuilder, private userService: UserService){
    this.usernameCtrl = fb.control('',[Validators.required,Validators.minLength(3)],
    control => this.isUsernameAvailable(control));
    this.passwrodCtrl = fb.control('',[Validators.required]);
    this.birthdateCtrl = fb.control('', [Validators.required, AppComponent.isOldEnough]); 
    this.userForm = fb.group({
      username: this.usernameCtrl,
      password: this.passwrodCtrl,
      birthdate: this.birthdateCtrl
    });
  }

  isUsernameAvailable(control: AbstractControl): Observable<{alreadyUsed: true} | null> {
    const username = control.value;
    return this.userService.getUserNames(username)      
      .pipe(map(usernames => ((usernames && usernames.length > 0) ? {alreadyUsed: true} : null)));
  }

  //Update from component
  reset(){
    this.usernameCtrl.setValue('');
    this.passwrodCtrl.setValue('');
  }

  register(): void{
    console.log(JSON.stringify(this.userForm.value));
  }

  static isOldEnough = (control: FormControl) => {
    const birthDatePlus18 = new Date(control.value);
    birthDatePlus18.setFullYear(birthDatePlus18.getFullYear() + 18);
    return birthDatePlus18 < new Date() ? null : { tooYoung: true}
  }
}
