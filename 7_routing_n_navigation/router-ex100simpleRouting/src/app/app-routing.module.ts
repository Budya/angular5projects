import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EverythingComponent, PepperoniComponent } from './app.component';

const routes: Routes = [
  {
    pathMatch: 'pepperoni',
    component: PepperoniComponent
  },
  {
    path: 'everything/:size',
    component: EverythingComponent
  },
  { path: '**',
    redirectTo: '/pepperoni',
    pathMatch: 'full'
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
