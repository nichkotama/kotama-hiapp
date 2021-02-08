import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-edit-victim',
  templateUrl: './edit-victim.page.html',
  styleUrls: ['./edit-victim.page.scss'],
})
export class EditVictimPage implements OnInit {
  logged_as = null;
  victims: { id: string; first_name: string;  last_name: string; address: string; phone_number: string; }[];
  id: string
  userDoc: any
  updaterecord: {first_name: string ; last_name: string; date_of_birth: string; gender: string; address: string};  

  constructor(
    private route: ActivatedRoute, private router: Router,
    private firestore: AngularFirestore,
    private storage: Storage,
  ) {
    this.updaterecord = {first_name: null, last_name: null, date_of_birth: null, gender: null, address: null};
    this.storage.get("logged_user").then(res=>{
      this.logged_as = res
    })

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.id = this.router.getCurrentNavigation().extras.state.id;
        this.userDoc = this.firestore.doc('victims/'+this.id).get().toPromise().then((doc) => {
          if (doc.exists) {
              this.userDoc = doc.data()
          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });;

      }
    });

  }

  ngOnInit() {
  }

  doUpdate(first_name, last_name, date_of_birth, gender, address){
    let updaterecord = {}
    
    updaterecord['first_name'] = first_name
    updaterecord['last_name'] = last_name
    updaterecord['date_of_birth'] = date_of_birth
    updaterecord['gender'] = gender
    updaterecord['address'] = address

    console.log("update=>");
    console.log(updaterecord);
    

    this.firestore.doc('/victims/'+this.id).update(updaterecord).then(()=>{
      this.router.navigateByUrl('/home', {replaceUrl: true})
    })
  }

  deleteRecord(id) {
    this.firestore.doc('/victims/'+id).delete().then(()=>{
      this.router.navigateByUrl('/home', {replaceUrl: true})

    })
    
  }

}
