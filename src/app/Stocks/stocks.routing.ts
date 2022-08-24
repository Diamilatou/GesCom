import { Routes } from "@angular/router";
import { StockComponent } from "./stock/stock.component";


export const stocksRoutes: Routes =[
    {
        path:'',
        children:[
            {
                path:'stock',
                component:StockComponent,
                data:{
                    title:'stock',
                    urls:[{title:'Dashboard',url:'/dashboard'},{title:'stock'}],
                },
            },
            
        ]
    }
]