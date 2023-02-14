import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CardComponent } from './shared/components/card/card.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { HttpClientModule } from '@angular/common/http';
import { MetarCardComponent } from './shared/components/metar-card/metar-card.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NavbarComponent,
    CardComponent,
    ButtonComponent,
    HttpClientModule,
    MetarCardComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
