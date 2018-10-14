import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {AppRoutingModule} from './app-routing.module';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {HomePageHeaderComponent} from './home-page-header/home-page-header.component';
import {ParallaxScrollModule} from 'ng2-parallaxscroll';
import {CardComponent} from './card/card.component';
import {FooterComponent} from './footer/footer.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { PhotoCardComponent } from './photo-card/photo-card.component';

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
        PhotoCardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatStepperModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
