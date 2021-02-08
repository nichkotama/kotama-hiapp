import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddVictimPageRoutingModule } from './add-victim-routing.module';

import { AddVictimPage } from './add-victim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddVictimPageRoutingModule
  ],
  declarations: [AddVictimPage]
})
export class AddVictimPageModule {}
