import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditVictimPage } from './edit-victim.page';

describe('EditVictimPage', () => {
  let component: EditVictimPage;
  let fixture: ComponentFixture<EditVictimPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVictimPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditVictimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
