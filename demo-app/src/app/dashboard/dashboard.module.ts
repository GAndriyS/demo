import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';

import { dashboardRoutes } from './dashboard.-routes.module';

@NgModule({
  declarations: [DashboardLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes),
  ]
})
export class DashboardModule { }
