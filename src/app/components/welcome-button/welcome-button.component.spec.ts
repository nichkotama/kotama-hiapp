import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { WelcomeButtonComponent } from './welcome-button.component';

describe('WelcomeButtonComponent', () => {
  let component: WelcomeButtonComponent;
  let fixture: ComponentFixture<WelcomeButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeButtonComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      // imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
