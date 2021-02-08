import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminTablePage } from './admin-table.page';

describe('AdminTablePage', () => {
  let component: AdminTablePage;
  let fixture: ComponentFixture<AdminTablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTablePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminTablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
