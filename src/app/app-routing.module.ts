import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RealizationDetailsComponent } from './realization-details/realization-details.component';
import { RealizationFormComponent } from './realization-form/realization-form.component';
import { RealizationListComponent } from './realization-list/realization-list.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'realisations', component: RealizationListComponent },
  {path: 'realisations/page/:page', component: RealizationListComponent},
  {path: 'realisations/creation', component: RealizationFormComponent},
  {path: 'realisations/:id', component: RealizationDetailsComponent},
  {path: 'configuration', component: SettingsComponent},
  {path: 'connexion', component: LoginComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }