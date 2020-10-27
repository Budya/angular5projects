import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, EverythingComponent, PepperoniComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    PepperoniComponent,
    EverythingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
