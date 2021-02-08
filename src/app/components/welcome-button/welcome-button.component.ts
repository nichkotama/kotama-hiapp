import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-welcome-button',
  templateUrl: './welcome-button.component.html',
  styleUrls: ['./welcome-button.component.scss'],
})
export class WelcomeButtonComponent implements OnInit {
  constructor(
    private router: Router,
    private storage: Storage,
  ) { }

  ngOnInit() {}

  navigateToLogin() {
    this.storage.set('skip_intro', 1);
    this.router.navigate(['/login']);
  }
}
