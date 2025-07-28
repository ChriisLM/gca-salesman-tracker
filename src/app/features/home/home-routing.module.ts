import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'vendor-search',
        loadComponent: () =>
          import('../pages/vendor-search/vendor-search.component').then(
            (m) => m.VendorSearchComponent
          ),
      },
      {
        path: 'page',
        loadComponent: () =>
          import('../pages/page1/page1.component').then(
            (m) => m.Page1Component
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
