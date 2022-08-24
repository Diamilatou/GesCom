import { Routes } from "@angular/router";
import { AchatsComponent } from "./achats/achats.component";
import { ArrivagesComponent } from "./arrivages/arrivages.component";
import { FournisseursComponent } from "./fournisseurs/fournisseurs.component";



export const achatsRoutes: Routes =[
    {
        path:'',
        children:[
            {
                path:'fournisseurs',
                component:FournisseursComponent,
                data:{
                    title:'fournisseurs',
                    urls:[{title:'Dashboard',url:'/dashboard'},{title:'fournisseurs'}],
                },
            },
            {
                path:'achats',
                component:AchatsComponent,
                data:{
                    title:'achats',
                    urls:[{title:'Dashboard',url:'/dashboard'},{title:'achats'}],
                },
            },
            {
                path:'arrivages',
                component:ArrivagesComponent,
                data:{
                    title:'arrivages',
                    urls:[{title:'Dashboard',url:'/dashboard'},{title:'arrivages'}],
                },
            },
            
        ]
    }
]