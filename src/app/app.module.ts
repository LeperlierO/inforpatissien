import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RealizationListComponent } from './realization-list/realization-list.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RealizationCardComponent } from './realization-card/realization-card.component';
import { RealizationDetailsComponent } from './realization-details/realization-details.component';
import { RealizationHeaderComponent } from './realization-header/realization-header.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat'
import { } from '@angular/fire/database';
import { RealizationFormComponent } from './realization-form/realization-form.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    RealizationListComponent,
    RealizationCardComponent,
    RealizationDetailsComponent,
    RealizationHeaderComponent,
    RealizationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IvyCarouselModule,
    AngularFireModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
