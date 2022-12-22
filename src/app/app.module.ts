import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RealizationListComponent } from './realization-list/realization-list.component';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { SettingsComponent } from './settings/settings.component';
import { SettingsItemComponent } from './settings-item/settings-item.component';
import { LoginComponent } from './login/login.component';
import { toast } from '../../node_modules/bulma-toast'
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { RealizationPhotoComponent } from './realization-photo/realization-photo.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeStepComponent } from './recipe-step/recipe-step.component';
import { RecipeStepPipe } from './pipes/recipe-step.pipe';
import { RecipeChronologyComponent } from './recipe-chronology/recipe-chronology.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeListItemComponent } from './recipe-list-item/recipe-list-item.component';
import { RecipeIngredientsComponent } from './recipe-ingredients/recipe-ingredients.component';
import { RecipeValidationComponent } from './recipe-validation/recipe-validation.component';
import { RealizationCommentComponent } from './realization-comment/realization-comment.component';
import { RealizationPhotosFormComponent } from './realization-photos-form/realization-photos-form.component';
import { RecipeStepDescriptionPipe } from './pipes/recipe-step-description.pipe';
import { InforpatissienTitleComponent } from './inforpatissien-title/inforpatissien-title.component';

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
    RealizationFormComponent,
    SettingsComponent,
    SettingsItemComponent,
    LoginComponent,
    RealizationPhotoComponent,
    RecipeDetailsComponent,
    RecipeStepComponent,
    RecipeStepPipe,
    RecipeChronologyComponent,
    RecipeListComponent,
    RecipeListItemComponent,
    RecipeIngredientsComponent,
    RecipeValidationComponent,
    RealizationCommentComponent,
    RealizationPhotosFormComponent,
    RecipeStepDescriptionPipe,
    InforpatissienTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IvyCarouselModule,
    AngularFireModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    HttpClient,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
