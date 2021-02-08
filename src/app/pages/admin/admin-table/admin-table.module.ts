import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminTablePageRoutingModule } from './admin-table-routing.module';

import { AdminTablePage } from './admin-table.page';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminTablePageRoutingModule,
    NgxDatatableModule,
    HttpClientModule,
  ],
  declarations: [AdminTablePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminTablePageModule {}
