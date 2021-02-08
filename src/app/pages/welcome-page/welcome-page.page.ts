import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.page.html',
  styleUrls: ['./welcome-page.page.scss'],
})
export class WelcomePagePage implements OnInit {
  public hideHeader: boolean

  constructor() { }

  ngOnInit() {
    this.hideHeader = false;
  }

}
