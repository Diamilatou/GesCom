import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients/clients.component';
import { RouterModule } from '@angular/router';
import { ventesRoutes } from './ventes.routing';
import { CommandesComponent } from './commandes/commandes.component';
import { LivraisonComponent } from './livraison/livraison.component';


@NgModule({
  declarations: [
    ClientsComponent,
    CommandesComponent,
    LivraisonComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ventesRoutes)
  ]
})
export class VentesModule { }
