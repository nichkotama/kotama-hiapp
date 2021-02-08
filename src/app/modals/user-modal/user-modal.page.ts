import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.page.html',
  styleUrls: ['./user-modal.page.scss'],
})
export class UserModalPage implements OnInit {
  user_phone: string;
  modalTitle: string;
  modelId: number;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController,
    private authService: AuthenticationService,
    private storage: Storage,
    ) { }

  ngOnInit() {
    console.table(this.navParams);
    this.modelId = this.navParams.data.paramID;
    this.modalTitle = this.navParams.data.paramTitle;

    this.storage.get("logged_user").then(res=>{
      this.user_phone = res
    })
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

  doSignOut() {
    this.authService.logoutUser()
      .then(res => {
        this.storage.remove('logged_user')
        this.navCtrl.navigateRoot('/login')
      })
      .catch(error => {
        console.log(error);
      })

    this.closeModal()
  }


}
