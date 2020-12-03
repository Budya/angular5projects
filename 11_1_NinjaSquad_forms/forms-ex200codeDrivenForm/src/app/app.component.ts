import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms-ex200codeDrivenForm';
  
  passwordForm: FormGroup;
  userForm: FormGroup;
  usernameCtrl: FormControl;
  birthdateCtrl: FormControl;
  passwordCtrl: FormControl;  
  confirmCtrl: FormControl;
  passwordStreingth = 0;
  

  static passwordMatch(group: FormGroup): {matchingError: true} | null {
    const password = group.get('password').value;
    const confirm = group.get('confirm').value;
    return password === confirm ? null : {matchingError: true};
  }

  constructor(fb: FormBuilder, private userService: UserService){
    this.usernameCtrl = 
    fb.control('', [Validators.required, Validators.minLength(3)], 
                control => this.isUsernameAvailable(control));    
    
    this.birthdateCtrl = 
    fb.control('', [Validators.required, AppComponent.isOldEnough]); 

    this.passwordCtrl = fb.control('', {validators: Validators.required, updateOn: 'blur'});
    this.confirmCtrl = fb.control('', [Validators.required]);       

    this.passwordForm = fb.group(
      { password: this.passwordCtrl, confirm: this.confirmCtrl },
      { validators: AppComponent.passwordMatch }
    );

    this.userForm = fb.group({
      username: this.usernameCtrl,
      birthdate: this.birthdateCtrl,
      passwordForm: this.passwordForm
    },
    {updateOn: 'blur'});

    this.passwordCtrl.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(newValue => (this.passwordStreingth = newValue.length));
  }

  isUsernameAvailable(control: AbstractControl): Observable<{alreadyUsed: true} | null> {
    const username = control.value;
    return this.userService.getUserNames(username)      
      .pipe(map(usernames => ((usernames && usernames.length > 0) ? {alreadyUsed: true} : null)));
  }

  //Update from component
  reset(){
    this.usernameCtrl.setValue('');
    this.passwordCtrl.setValue('');
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
