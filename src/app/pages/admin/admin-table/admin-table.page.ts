import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

export interface Data {
  victims: string;
}

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.page.html',
  styleUrls: ['./admin-table.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminTablePage implements OnInit {
  public data: Data;
  public columns: any;
  public rows: any;

  constructor(
    private http: HttpClient
  ) { 
    this.columns = [
      { name: 'Name' },
      { name: 'Count' },
    ];

    this.http.get<Data>('../../../../assets/dummy.json')
      .subscribe((res) => {
        console.log(res)
        this.rows = res.victims;
      });

  }

  ngOnInit() {
  }

}
