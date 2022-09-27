import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaymentPageComponent } from './components/payment-page/payment-page.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentPageComponent,
    // children: [
    //   {
    //     path: AppRoutes.Home,
    //     loadChildren: () =>
    //       import('../modules/home/home.module').then((m) => m.HomeModule),
    //   },
    //   { path: '', pathMatch: 'full', redirectTo: AppRoutes.Home },
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayRoutingModule { }
