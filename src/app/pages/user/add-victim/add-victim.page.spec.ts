import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddVictimPage } from './add-victim.page';

describe('AddVictimPage', () => {
  let component: AddVictimPage;
  let fixture: ComponentFixture<AddVictimPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVictimPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddVictimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
