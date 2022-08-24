import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitComponent } from './produit/produit.component';
import { RouterModule } from '@angular/router';
import { produitsRoutes } from './produits.routing';


@NgModule({
  declarations: [
    ProduitComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(produitsRoutes)
  ]
})
export class ProduitsModule { }
