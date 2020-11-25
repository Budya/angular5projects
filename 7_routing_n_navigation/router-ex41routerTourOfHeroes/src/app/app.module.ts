import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

//import { CrisisCenterModule } from './crisis-center/crisis-center.module';
//import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroesModule } from './heroes/heroes.module';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
//import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './auth/login/login.component';
import { AuthModule } from './auth/auth.module';
import { Router } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    //CrisisListComponent,
    //HeroListComponent,
    PageNotFoundComponent,
    ComposeMessageComponent,
    
    
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HeroesModule,
    //CrisisCenterModule,
    
    AuthModule,   
    AppRoutingModule    
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(router: Router) {
    const replacer = (key, value) => (typeof value === 'function') ? 
    value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2))
  }
 }
