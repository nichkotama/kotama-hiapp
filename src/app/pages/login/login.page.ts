import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { PhoneNumber } from 'src/app/providers/phoneNumber';
import { WindowService } from 'src/app/services/window.service';
import { AuthenticationService } from '../../services/authentication.service';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';

import firebase from "firebase/app";
import "firebase/auth";
firebase.initializeApp(environment.firebaseConfig);

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // validations_form: FormGroup;
  errorMessage: string = '';
  phoneNumber: string = '';
  phoneNumberValidator = new PhoneNumber();
  verificationCode: string;
  user: any;
  windowRef: any;

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private storage: Storage,
    private win: WindowService
  ) { }

  ngOnInit() {
    this.windowRef = this.win.windowRef
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container')

    this.windowRef.recaptchaVerifier.render()
  }

  validation_messages = {
    'username': [
      { type: 'required', message: 'Username is required.' },
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };

  loginUser(value) {
    this.authService.loginUser(value)
      .then(res => {
        console.log(res);
        this.errorMessage = "";
        this.navCtrl.navigateForward('/pages/home');
      }, err => {
        this.errorMessage = err.message;
      })
  }

  sendLoginCode() {
    const appVerifier = this.windowRef.recaptchaVerifier;
    const num = this.phoneNumber;

    firebase.auth().signInWithPhoneNumber(num, appVerifier)
      .then(result => {
        this.windowRef.confirmationResult = result;
      })
      .catch( error => this.windowRef.hasError );

  }

  verifyLoginCode() {
    this.windowRef.confirmationResult
      .confirm(this.verificationCode)
      .then( result => {
        this.user = result.user;
        this.errorMessage = "";
        if(this.user.phoneNumber=='+628123456789') {
          this.storage.set('logged_user', '+628123456789');
          this.navCtrl.navigateRoot('/admin-dashboard');

        } else {
          this.storage.set('logged_user', this.user.phoneNumber);
          this.navCtrl.navigateRoot('/home');

        }
        
      })
      .catch( error => console.log(error, "Incorrect code entered?"));
  }


}
