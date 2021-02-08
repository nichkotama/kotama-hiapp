import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminGraphPage } from './admin-graph.page';

const routes: Routes = [
  {
    path: '',
    component: AdminGraphPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminGraphPageRoutingModule {}
