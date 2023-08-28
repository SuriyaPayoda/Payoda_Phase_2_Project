import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { ComLogin } from '../model/comlogin.model';
import { Login } from '../model/login.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      userType: ['recruiter'] // Default value is 'seeker'
    });

    const storedUserData = JSON.parse(sessionStorage.getItem('seeker') || '{}');
    if (storedUserData) {
      console.log('Stored user data:', storedUserData);
    }
  }

  onLoginSubmit(userType: 'seeker' | 'recruiter') {
    const usernameControl = this.loginForm.get('username');
    const passwordControl = this.loginForm.get('password');

    if (!usernameControl?.value || !passwordControl?.value) {
      this.snackBar.open('Please fill in all the details', 'Close', {
        duration: 3000,
        verticalPosition: 'top'
      });
      return;
    }

    const credentials: Login = {
      username: usernameControl.value,
      password: passwordControl.value
    };

    if (userType === 'seeker') {
      this.loginService.seekerLogin(credentials).subscribe(
        (response: any) => {
          console.log('Seeker logged in:', response);
          sessionStorage.setItem('seeker', JSON.stringify(response));
          this.router.navigate(['/discover']);
          this.snackBar.open('Seeker login successful!', 'Dismiss', { duration: 3000 });
        },
        error => {
          console.error('Seeker login error:', error);
          this.snackBar.open('Seeker login failed. Please try again.', 'Dismiss', { duration: 3000 });
        }
      );
    } else if (userType === 'recruiter') {
      this.loginService.companyLogin(credentials).subscribe(
        (response: any) => {
          console.log('Recruiter logged in:', response);
          sessionStorage.setItem('recruiter', JSON.stringify(response));
          this.router.navigate(['/c-applist']);
          this.snackBar.open('Recruiter login successful!', 'Dismiss', { duration: 3000 });
        },
        error => {
          console.error('Recruiter login error:', error);
          this.snackBar.open('Recruiter login failed. Please try again.', 'Dismiss', { duration: 3000 });
        }
      );
    }
  }
}
