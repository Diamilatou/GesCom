import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent } from './stock/stock.component';
import { RouterModule } from '@angular/router';
import { stocksRoutes } from './stocks.routing'


@NgModule({
  declarations: [
    StockComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(stocksRoutes)
  ]
})
export class StocksModule { }
