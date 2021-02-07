import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { NavController, ToastController } from '@ionic/angular';
import { ValidationServiceProvider } from '../../providers/validation-service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  registerForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  MOBILE_PATTERN = /[0-9\+\-\ ]/;

  validation_messages = {
    'username': [
      { type: 'required', message: 'Phone number is required.' },
      { type: 'pattern', message: 'Please enter a valid phone number.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    public toastController: ToastController
  ) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(this.MOBILE_PATTERN)
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
      confirmPassword: [
        "",
        Validators.compose([
          Validators.minLength(4),
          Validators.required
        ])
      ],
    }, {
      validator: ValidationServiceProvider.MatchPassword // Inject the provider method
    });
  }
  
  tryRegister(value) {
    async () => {
      const toast = await this.toastController.create({
        message: 'Your settings have been saved.',
        duration: 2000
      });
      toast.present();
    }
    // this.authService.registerUser(value)
    //   .then(res => {
    //     console.log(res);
    //     this.errorMessage = "";
    //     this.successMessage = "Your account has been created. Please log in.";
    //   }, err => {
    //     console.log(err);
    //     this.errorMessage = err.message;
    //     this.successMessage = "";
    //   })
  }

}
