import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent  implements OnInit {
  isSamePass = false;
  hide = true;
  hideConf = true;
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private routerService: Router,
  ) {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s'-]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^])[^\s@]{8,}$/)]],
      confirmPassword: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^])[^\s@]{8,}$/)]],
    });
  }

  ngOnInit() {}
  setPassVis() {
    this.hide = !this.hide;
  }
  setConfPassVis() {
    this.hideConf = !this.hideConf;
  }
  checkName() {
    if (this.registerForm.get('name')?.hasError('required')) {
      return 'You must enter a name';
    }
    return this.registerForm.get('name')?.hasError('pattern')
      ? 'Not a valid name'
      : '';

  }
  checkEmail() {
    if (this.registerForm.get('email')?.hasError('required')) {
      return 'You must enter a value';
    }
    return this.registerForm.get('email')?.hasError('email')
      ? 'Not a valid email'
      : '';
  }
  checkPassword() {
    if (this.registerForm.get('password')?.hasError('required')) {
      return 'Password is required!';
    }
    return this.registerForm.get('password')?.hasError('pattern')
      ? 'Not a valid password'
      : '';
  }
  checkConfPassword(){
    if (this.registerForm.get('confirmPassword')?.hasError('required')) {
      return 'Confirm Password is required!';
    }
    return this.registerForm.get('confirmPassword')?.hasError('pattern')
      ? 'Not a valid password'
      : '';
  }
  checkIfSamePass(){
    return this.registerForm.get('password')?.value  === this.registerForm.get('confirmPassword')?.value ? true : false;
  }
  setPassSnackbar(isSamePass: boolean){
    this.isSamePass = isSamePass;
  }
  registerUser(){
    if(this.registerForm.valid){
      if(this.checkIfSamePass() === true){
        this.routerService.navigate(['/home']);
      }
      else{
        this.setPassSnackbar(true);
      }
    }
  }
}
