import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditVictimPageRoutingModule } from './edit-victim-routing.module';

import { EditVictimPage } from './edit-victim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditVictimPageRoutingModule
  ],
  declarations: [EditVictimPage]
})
export class EditVictimPageModule {}
