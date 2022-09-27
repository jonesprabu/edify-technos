import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CommitteeComponent } from './components/committee/committee.component';

const routes: Routes = [
  {
    path: '',
    component: CommitteeComponent,
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
export class CommitteRoutingModule {}
