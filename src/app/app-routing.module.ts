import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SignInComponent} from './sign-in/sign-in.component';

const routes: Route[] = [
  {path: '', pathMatch: 'full', redirectTo:'accueil'},
  {path: 'accueil', component: HomePageComponent},
  {path: 'devenir-client', component: SignUpComponent},
  {path: 'acces-client', component: SignInComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
