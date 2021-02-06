import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WelcomePagePageRoutingModule } from './welcome-page-routing.module';
import { ComponentsModule } from './../../components/components.module';
import { WelcomePagePage } from './welcome-page.page';

const routes: Routes = [
  {
    path: '',
    component: WelcomePagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomePagePageRoutingModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WelcomePagePage]
})
export class WelcomePagePageModule {}
