import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditVictimPage } from './edit-victim.page';

const routes: Routes = [
  {
    path: '',
    component: EditVictimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditVictimPageRoutingModule {}
