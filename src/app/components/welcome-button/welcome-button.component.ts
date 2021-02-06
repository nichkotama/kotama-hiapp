import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-button',
  templateUrl: './welcome-button.component.html',
  styleUrls: ['./welcome-button.component.scss'],
})
export class WelcomeButtonComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
