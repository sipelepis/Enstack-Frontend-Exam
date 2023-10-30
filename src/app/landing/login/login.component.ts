import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserLogInModel } from 'src/app/shared/types/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  hide = true;
  colorControl = new FormControl('primary' as ThemePalette);
  @Output() UserLogInModel = new EventEmitter<UserLogInModel[]>();
  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder,  private routerService: Router, private _snackBar: MatSnackBar) {
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

  }

  ngOnInit() {}
  // openSnackBar(message: string) {
  //   this._snackBar.open(message, undefined);

  // }
  setPassVis(){
    this.hide = !this.hide;
  }
  checkEmail(){
    if (this.contactForm.get('email')?.hasError('required')){
      return 'You must enter a value';
    }
    return this.contactForm.get('password')?.hasError('email') ? 'Not a valid email' : '';
  }
  checkPassword(){
    return "Password is required!"
  }
  loginEmployee(){
    if(this.contactForm.get('email')?.valid || this.contactForm.get('password')?.valid){
      if(this.contactForm.get('password')?.value === "Testpassw0rd1"){
        this._snackBar.dismiss();
        this.routerService.navigate(['/landing/register'])
      }
      // else{
      //   this.openSnackBar("Incorrect password. Please double-check your password and try again.")
      // }
    }
  }
}
