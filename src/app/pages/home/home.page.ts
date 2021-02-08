import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavigationExtras, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { UserModalPage } from 'src/app/modals/user-modal/user-modal.page';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  doc: any;
  showHeader: boolean;
  victims: { id: string; first_name: string;  last_name: string; address: string; phone_number: string; }[];
  addvictim: {type: string ; description: string; amount: number};  

  constructor(
    private firestore: AngularFirestore,
    private modalController: ModalController,
    private router: Router,
  ) { }

  ngOnInit() {
    this.showHeader = true
    this.addvictim = {type :'', description :'', amount: null}    
    this.firestore.collection('/victims/').snapshotChanges().subscribe(res=>{
      if(res){
        this.victims = res.map(e=>{
          return{
            id: e.payload.doc.id,
            first_name: e.payload.doc.data()['first_name'],
            last_name: e.payload.doc.data()['last_name'],
            address: e.payload.doc.data()['address'],
            gender: e.payload.doc.data()['gender'],
            phone_number: e.payload.doc.data()['phone_number'],
          }
        })
      }  
    })
  }

  ViewRecord(id) {
    let navigationExtras: NavigationExtras = { state: { id: id } };
    this.router.navigate(['/edit-victim'], navigationExtras);
  }
  addNewVictim() {
    this.router.navigate(['/add-victim']);
    
  }

  async showUserModal() {
    const modal = await this.modalController.create({
      component: UserModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
