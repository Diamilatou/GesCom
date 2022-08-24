import { Routes } from "@angular/router";
import { ClientsComponent } from "./clients/clients.component";
import { CommandesComponent } from "./commandes/commandes.component";
import { LivraisonComponent } from "./livraison/livraison.component";

export const ventesRoutes: Routes =[
    {
        path:'',
        children:[
            {
                path:'clients',
                component:ClientsComponent,
                data:{
                    title:'client',
                    urls:[{title:'Dashboard',url:'/dashboard'},{title:'client'}],
                },
            },
            {
                path:'commandes',
                component:CommandesComponent,
                data:{
                    title:'commandes',
                    urls:[{title:'Dashboard',url:'/dashboard'},{title:'commandes'}],
                },
            },
            {
                path:'livraison',
                component:LivraisonComponent,
                data:{
                    title:'livraison',
                    urls:[{title:'Dashboard',url:'/dashboard'},{title:'livraison'}],
                },
            },
        ]
    }
]