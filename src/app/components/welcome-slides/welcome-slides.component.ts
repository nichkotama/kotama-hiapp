import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-slides',
  templateUrl: './welcome-slides.component.html',
  styleUrls: ['./welcome-slides.component.scss'],
})
export class WelcomeSlidesComponent implements OnInit {  

  slideOpts = {
    speed: 400
  };

  constructor() { 

  }

  async ngOnInit() {
    
  }

}
