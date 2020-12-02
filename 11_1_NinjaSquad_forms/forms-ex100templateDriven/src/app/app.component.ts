import { Component } from '@angular/core';
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
}
