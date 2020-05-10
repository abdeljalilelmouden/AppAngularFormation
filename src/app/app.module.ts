import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormationsComponent } from './formations/formations.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Error404Component } from './error404/error404.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { HttpClientModule } from '@angular/common/http';
import { VoirFormationComponent } from './formations/voir-formation/voir-formation.component';

@NgModule({
  declarations: [
    AppComponent,
    FormationsComponent,
    NavbarComponent,
    Error404Component,
    AuthentificationComponent,
    VoirFormationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
