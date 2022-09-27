import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from '../core/constants/routes';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: AppRoutes.Home,
        loadChildren: () =>
          import('../modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: AppRoutes.Pay,
        loadChildren: () =>
          import('../modules/pay/pay.module').then((m) => m.PayModule),
      },
      {
        path: AppRoutes.Neighbours,
        loadChildren: () =>
          import('../modules/neighbours/neighbours.module').then(
            (m) => m.NeighboursModule
          ),
      },
      {
        path: AppRoutes.Committee,
        loadChildren: () =>
          import('../modules/committee/committee.module').then(
            (m) => m.CommitteeModule
          ),
      },
      { path: '', pathMatch: 'full', redirectTo: AppRoutes.Home },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
