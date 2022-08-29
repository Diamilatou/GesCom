import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDialogContentComponent, ProduitComponent } from './produit/produit.component';
import { RouterModule } from '@angular/router';
import { produitsRoutes } from './produits.routing';
import { UnityComponent, UnityDialogContentComponent } from './unity/unity.component';
import { CategoryComponent, CategoryDialogContentComponent } from './category/category.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from '../demo-material-module';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search'

@NgModule({
  declarations: [
    ProduitComponent,
    ProductDialogContentComponent,
    UnityComponent,
    UnityDialogContentComponent,
    CategoryComponent,
    CategoryDialogContentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(produitsRoutes),
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatSelectModule,
    NgxMatSelectSearchModule
  ]
})
export class ProduitsModule { }
