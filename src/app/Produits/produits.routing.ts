import { Routes } from "@angular/router";
import { CategoryComponent } from "./category/category.component";
import { ProduitComponent } from "./produit/produit.component";
import { UnityComponent } from "./unity/unity.component";


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
            {
                path:'category',
                component:CategoryComponent,
                data:{
                    title:'Catégories de produit ',
                    urls:[{title:'Dashboard',url:'/dashboard'},{title:'categorie'}],
                },
            },
            {
                path:'unity',
                component:UnityComponent,
                data:{
                    title:'Unités',
                    urls:[{title:'Dashboard',url:'/dashboard'},{title:'Unités'}],
                },
            },
            
        ]
    }
]