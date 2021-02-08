import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminGraphPageRoutingModule } from './admin-graph-routing.module';

import { AdminGraphPage } from './admin-graph.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminGraphPageRoutingModule
  ],
  declarations: [AdminGraphPage]
})
export class AdminGraphPageModule {}
