import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminGraphPage } from './admin-graph.page';

describe('AdminGraphPage', () => {
  let component: AdminGraphPage;
  let fixture: ComponentFixture<AdminGraphPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGraphPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminGraphPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
