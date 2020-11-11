import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';

const routes: Routes = [
  {path: 'crises', component: CrisisListComponent, data: {animation: 'crises'}},
  {path: 'crises/:id', component: CrisisDetailComponent, data: {animation: 'crisis'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisisRoutingModule { }
