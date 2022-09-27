import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
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
export class HomeRoutingModule {}
