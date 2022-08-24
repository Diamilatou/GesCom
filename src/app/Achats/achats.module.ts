import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { achatsRoutes } from './achats.routing';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';
import { AchatsComponent } from './achats/achats.component';
import { ArrivagesComponent } from './arrivages/arrivages.component';


@NgModule({
  declarations: [
    FournisseursComponent,
    AchatsComponent,
    ArrivagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(achatsRoutes)
  ]
})
export class AchatsModule { }
