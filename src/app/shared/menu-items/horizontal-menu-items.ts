import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}
export interface Saperator {
  name: string;
  type?: string;
}
export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  saperator?: Saperator[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: '',
    name: 'Personal',
    type: 'saperator',
    icon: 'av_timer',
  },
  {
    state: 'dashboards',
    name: 'Dashboards',
    type: 'sub',
    icon: 'av_timer',
    children: [
      { state: 'dashboard1', name: 'Dashboard 1', type: 'link' },
      { state: 'dashboard2', name: 'Dashboard 2', type: 'link' },
    ],
  },
  {
    state: 'achats',
    name: 'Achats Produits',
    type: 'sub',
    icon: 'add_shopping_cart',
    children: [
      { state: 'fournisseurs', name: 'Fournisseurs', type: 'link' },
      { state: 'achats', name: 'Commandes fournisseurs', type: 'link' },
      { state: 'arrivages', name: 'Arrivage', type: 'link' },
    ],
  },
  {
    state: 'produits',
    name: 'Produits',
    type: 'sub',
    icon: 'store',
    children: [
      { state: 'produit', name: 'Produit', type: 'link' },
      { state: 'unity', name: 'unités', type: 'link' },
      { state: 'category', name: 'catégories', type: 'link' },
      
    ],
  },
  {
    state: 'ventes',
    name: 'Ventes',
    type: 'sub',
    icon: 'shopping_cart',
    children: [
      { state: 'clients', name: 'Clients', type: 'link' },
      { state: 'commandes', name: 'Commandes clients', type: 'link' },
      { state: 'livraison', name: 'livraison', type: 'link' },
    ],
  },
  {
    state: 'stocks',
    name: 'Stocks',
    type: 'sub',
    icon: 'account_balance',
    children: [
      { state: 'stock', name: 'Stock', type: 'link' },
     
    ],
  },
  {
    state: 'tresorerie',
    name: 'Tresorerie',
    type: 'sub',
    icon: 'add_shopping_cart',
    children: [
      { state: 'reglement', name: 'Reglement fournisseurs', type: 'link' },
    
    ],
  },
 
];

@Injectable()
export class HorizontalMenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
