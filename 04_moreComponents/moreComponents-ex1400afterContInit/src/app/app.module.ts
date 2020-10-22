import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, CrewComponent, MemberComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CrewComponent,
    MemberComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
