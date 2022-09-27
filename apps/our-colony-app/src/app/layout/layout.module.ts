import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  imports: [LayoutRoutingModule, CommonModule],
  declarations: [
    LayoutComponent,
    ContainerComponent,
    HeaderComponent,
    NavComponent,
  ],
  exports: [LayoutComponent, ContainerComponent, HeaderComponent, NavComponent],
})
export class LayoutModule {}
