import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserModel } from './userModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms-ex100templateDriven';
  
  user: UserModel = {
    username: '',
    password: ''
  };

  register(): void{
    console.log(this.user);
  }

  isOldEnough = (control: FormControl) => {
    const birthDatePlus18 = new Date(control.value);
    birthDatePlus18.setFullYear(birthDatePlus18.getFullYear() + 18);
    return birthDatePlus18 < new Date() ? null : { tooYoung: true}
  }

}
