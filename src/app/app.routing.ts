import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { AppBlankComponent } from './layouts/blank/blank.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboards/dashboard1',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        redirectTo: '/dashboards/dashboard1',
        pathMatch: 'full',
      },
      {
        path: 'dashboards',
        loadChildren: () =>
          import('./dashboards/dashboards.module').then((m) => m.DashboardsModule),
      },
      {
        path: 'ventes',
        loadChildren: () =>
          import('./Ventes/ventes.module').then((m) => m.VentesModule),
      },
      {
        path: 'produits',
        loadChildren: () =>
          import('./Produits/produits.module').then((m) => m.ProduitsModule),
      },
      {
        path: 'achats',
        loadChildren: () =>
          import('./Achats/achats.module').then((m) => m.AchatsModule),
      },
      {
        path: 'stocks',
        loadChildren: () =>
          import('./Stocks/stocks.module').then((m) => m.StocksModule),
      },
      {
        path: 'tresorerie',
        loadChildren: () =>
          import('./Tresorerie/tresorerie.module').then((m) => m.TresorerieModule),
      },
      {
        path: 'apps',
        loadChildren: () => import('./apps/apps.module').then((m) => m.AppsModule),
      },
      {
        path: 'forms',
        loadChildren: () => import('./forms/forms.module').then((m) => m.FormModule),
      },
      {
        path: 'tables',
        loadChildren: () => import('./tables/tables.module').then((m) => m.TablesModule),
      },
      {
        path: 'tree',
        loadChildren: () => import('./tree/tree.module').then((m) => m.TreeModule),
      },
      {
        path: 'datatables',
        loadChildren: () =>
          import('./datatables/datatables.module').then((m) => m.DataTablesModule),
      },
      {
        path: 'pages',
        loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'widgets',
        loadChildren: () => import('./widgets/widgets.module').then((m) => m.WidgetsModule),
      },
      {
        path: 'charts',
        loadChildren: () => import('./charts/chartslib.module').then((m) => m.ChartslibModule),
      },
      {
        path: 'multi',
        loadChildren: () => import('./multi-dropdown/multi-dd.module').then((m) => m.MultiModule),
      },
    ],
  },
  {
    path: '',
    component: AppBlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./authentication/authentication.module').then((m) => m.AuthenticationModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'authentication/404',
  },
];
