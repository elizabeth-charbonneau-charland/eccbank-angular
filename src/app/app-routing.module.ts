import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {ContactComponent} from './contact/contact.component';
import {ProductComponent} from './product/product.component';
import {CreateAccountComponent} from './create-account/create-account.component';
import {AccountListComponent} from './account/account-list/account-list.component';
import { MoneyTransferComponent } from './money-transfer/money-transfer.component';

const routes: Route[] = [
  {path: '', pathMatch: 'full', redirectTo: ' accueil '},
  {path: 'accueil', component: HomePageComponent},
    {path: 'produit', component: ProductComponent},
  {path: 'inscription', component: SignUpComponent},
  {path: 'connexion', component: SignInComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'compte', component: AccountListComponent},
    {path: 'créeCompte', component: CreateAccountComponent},
    {path: 'virer', component: MoneyTransferComponent}
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
