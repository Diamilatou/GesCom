import { Routes } from "@angular/router";
import { ProduitComponent } from "./produit/produit.component";


export const produitsRoutes: Routes =[
    {
        path:'',
        children:[
            {
                path:'produit',
                component:ProduitComponent,
                data:{
                    title:'produit',
                    urls:[{title:'Dashboard',url:'/dashboard'},{title:'produit'}],
                },
            },
            
        ]
    }
]