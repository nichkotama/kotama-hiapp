import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { UserModalPage } from 'src/app/modals/user-modal/user-modal.page';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  async showUserModal() {
    const modal = await this.modalController.create({
      component: UserModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  navigateToAdminGraph() {
    this.router.navigate(['/admin-graph']);
  }

  navigateToAdminTable() {
    this.router.navigate(['/admin-table']);
  }

}
