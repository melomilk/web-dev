import { ProductListComponent } from './components/product-list/product-list.component';

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductListComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];