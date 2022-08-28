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
  ]
})
export class ProduitsModule { }
