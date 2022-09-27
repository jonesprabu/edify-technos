import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './core/constants/routes';
import { UnderConstructionComponent } from './core/components/under-construction/under-construction.component';

const routes: Routes = [
  {
    path: AppRoutes.Layout,
    loadChildren: () =>
      import('./layout/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: 'pdf/abc/:slug',
    component: UnderConstructionComponent,
  },
  {
    path: AppRoutes.UnderConstruction,
    component: UnderConstructionComponent,
  },
  { path: '', pathMatch: 'full', redirectTo: AppRoutes.Layout },
  { path: '**', redirectTo: AppRoutes.Layout },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
