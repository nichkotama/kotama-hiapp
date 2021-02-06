import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeButtonComponent } from './welcome-button/welcome-button.component';
import { WelcomeSlidesComponent } from './welcome-slides/welcome-slides.component';

@NgModule({
  declarations: [
    WelcomeButtonComponent,
    WelcomeSlidesComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WelcomeButtonComponent,
    WelcomeSlidesComponent,
  ]
})
export class ComponentsModule { }
