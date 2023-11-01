import { Component, OnInit, Output, EventEmitter, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { LoginAttemptsService } from 'src/app/shared/services/login-attempts.service';
import { UserLogInModel } from 'src/app/shared/types/user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isFailedToastOpen = false;
  isLockedOutToastOpen = false;

  hide = true;
  colorControl = new FormControl('primary' as ThemePalette);
  @Output() UserLogInModel = new EventEmitter<UserLogInModel[]>();
  contactForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private routerService: Router,
    private loginAttemptsService: LoginAttemptsService
  ) {
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {}
  setFailedToastOpen(isOpen: boolean) {
    this.isFailedToastOpen = isOpen;
  }
  setLockedOutToastOpen(isOpen: boolean) {
    this.isLockedOutToastOpen = isOpen;
  }
  setPassVis() {
    this.hide = !this.hide;
  }
  checkEmail() {
    if (this.contactForm.get('email')?.hasError('required')) {
      return 'You must enter a value';
    }
    return this.contactForm.get('email')?.hasError('email')
      ? 'Not a valid email'
      : '';
  }
  checkPassword() {
    return 'Password is required!';
  }
  loginUser() {
    if(this.loginAttemptsService.canAttemptLogin()){
      if (
        this.contactForm.get('email')?.valid ||
        this.contactForm.get('password')?.valid
      ) {
        if (this.contactForm.get('password')?.value === 'Testpassw0rd1') {
          this.routerService.navigate(['/home']);
        }
        else{
          console.log("failed login!");
          this.setFailedToastOpen(true);
          this.loginAttemptsService.handleFailedLogin();
        }
      }
    }
    else{
      this.setLockedOutToastOpen(true);
      console.log('Login locked out. Please try again later.');
    }
  }
}
