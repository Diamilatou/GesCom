import { Routes } from "@angular/router";
import { CaisseComponent } from "./caisse/caisse.component";


export const produitsRoutes: Routes =[
    {
        path:'',
        children:[
            {
                path:'caisse',
                component:CaisseComponent,
                data:{
                    title:'caisse',
                    urls:[{title:'Dashboard',url:'/dashboard'},{title:'caisse'}],
                },
            },
            
        ]
    }
]