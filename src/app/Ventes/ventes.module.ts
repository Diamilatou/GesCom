import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDialogContentComponent, ClientsComponent } from './clients/clients.component';
import { RouterModule } from '@angular/router';
import { ventesRoutes } from './ventes.routing';
import { CommandesComponent } from './commandes/commandes.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    ClientsComponent,
    CommandesComponent,
    LivraisonComponent,
    ClientDialogContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ventesRoutes),
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ]
})
export class VentesModule { }
