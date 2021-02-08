import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-add-victim',
  templateUrl: './add-victim.page.html',
  styleUrls: ['./add-victim.page.scss'],
})
export class AddVictimPage implements OnInit {
  logged_as = null;
  addrecord: {first_name: string ; last_name: string; date_of_birth: string; gender: string; address: string};  

  constructor(
    private firestore: AngularFirestore,
    private storage: Storage,
  ) { }

  ngOnInit() {
    this.addrecord = {first_name: null, last_name: null, date_of_birth: null, gender: null, address: null};
    this.storage.get("logged_user").then(res=>{
      this.logged_as = res
    })
  }
  
  doAdd(first_name, last_name, date_of_birth, gender, address){
    let addrecord = {}
    
    addrecord['first_name'] = first_name
    addrecord['last_name'] = last_name
    addrecord['date_of_birth'] = date_of_birth
    addrecord['gender'] = gender
    addrecord['address'] = address
    addrecord['created_by'] = this.logged_as

    this.firestore.collection('/victims/').add({...addrecord}).then(()=>{
      this.addrecord = {first_name: null, last_name: null, date_of_birth: null, gender: null, address: null} 
    })
  }

}
