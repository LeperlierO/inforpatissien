import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RealizationDetailsComponent } from './realization-details/realization-details.component';
import { RealizationListComponent } from './realization-list/realization-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'realisations', component: RealizationListComponent },
  {path: 'realisations/page/:page', component: RealizationListComponent},
  {path: 'realisations/:code', component: RealizationDetailsComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }