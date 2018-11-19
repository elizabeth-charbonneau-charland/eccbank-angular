import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {AppRoutingModule} from './app-routing.module';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {HomePageHeaderComponent} from './home-page-header/home-page-header.component';
import {CardComponent} from './card/card.component';
import {FooterComponent} from './footer/footer.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material';
import {FormsModule} from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CarouselDirective } from './carousel.directive';
import { SlideDirective } from './slide.directive';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { AccountComponent } from './account/account.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AccountListComponent } from './account/account-list/account-list.component';
import { MoneyTransferComponent } from './money-transfer/money-transfer.component';
import { AccountProviderComponent } from './account-provider/account-provider.component';
import { AccountNavbarComponent } from './account-navbar/account-navbar.component';
import { MessagePopupComponent } from './message-popup/message-popup.component';
import { AccountInformationsComponent } from './account/account-informations/account-informations.component';



@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        NavBarComponent,
        HomePageHeaderComponent,
        CardComponent,
        FooterComponent,
        SignUpComponent,
        SignInComponent,
        CarouselDirective,
        SlideDirective,
        ContactComponent,
        ProductComponent,
        AccountComponent,
        CreateAccountComponent,
        AccountListComponent,
        MoneyTransferComponent,
        AccountProviderComponent,
        AccountNavbarComponent,
        MessagePopupComponent,
        AccountInformationsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatStepperModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
