import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddVictimPage } from './add-victim.page';

const routes: Routes = [
  {
    path: '',
    component: AddVictimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddVictimPageRoutingModule {}
