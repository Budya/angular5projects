import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

//import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { AuthGuard } from './auth/auth.guard';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

const appRoutes: Routes = [
  
  //{ path: 'heroes', component: HeroListComponent},
  { 
    path: 'admin',
    loadChildren: ()=> import('./admin/admin.module').then(m => m.AdminModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'crisis-center',
    loadChildren: () => import('./crisis-center/crisis-center.module').then(m=> m.CrisisCenterModule),
    data: {preload: true}
  },
  { path: 'compose', component: ComposeMessageComponent, outlet: 'popup' },
  { path: '', redirectTo: '/superheroes', pathMatch: "full"},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      //{enableTracing: true}
      {
        preloadingStrategy: SelectivePreloadingStrategyService
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [SelectivePreloadingStrategyService]
})
export class AppRoutingModule { }
