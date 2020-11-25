import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent{

  constructor(private fb: FormBuilder) {}

  profileForm = new FormGroup(
    {
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl(''),

      address: new FormGroup(
        {
          street: new FormControl('',Validators.required),
          city: new FormControl(''),
          state: new FormControl(''),
          zip: new FormControl('')
        }
      )
    }
  );

  onSubmit(){
    console.warn(this.profileForm.value);
  }

  get testData(){
    return this.profileForm.value;
  } 

  updateProfile(){
    this.profileForm.patchValue({
      firstName: 'Nancy', 
      address: {
        street:'123 Drew Street'}
    });
  }

}
