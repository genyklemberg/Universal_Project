import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {ElementsComponent} from '../elements/elements.component';
import {MyCartComponent} from '../my-cart/my-cart.component';
import {TeamsComponent} from '../gaming/teams/teams.component';
import {TwitterComponent} from '../shared/twitter/twitter.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '#', component: HomeComponent },
  { path: 'gohome', redirectTo: '' },
  { path: 'elements', component: ElementsComponent },
  { path: 'my-cart', component: MyCartComponent },
  { path: 'teams/dota2/rankings', component: TeamsComponent, children: [
    { path: '', component: TwitterComponent },
    // { path: '', component: TwitterComponent, data: [{isFirst: true}] },
    { path: 'map/:id', component: TwitterComponent }
  ] },
  { path: '**', redirectTo: ''}
  // { path: 'elements', component: ElementsComponent, children: [
  //   { path: ':id/:name', component: UserComponent }
  // ] },
  // {
  //   path: 'servers',
  //   // canActivate: [AuthGuard],
  //   canActivateChild: [AuthGuard],
  //   component: ServersComponent,
  //   children: [
  //     { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
  //     { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
  //   ] },
  // // { path: 'not-found', component: PageNotFoundComponent },
  // { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  // { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
