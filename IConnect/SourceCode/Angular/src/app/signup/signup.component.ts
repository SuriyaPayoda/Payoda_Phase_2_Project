import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/services/register.service';
import { SeekerRegister,CompanyRegister } from '../model/register.model';
import { Login } from '../model/login.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  registrationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private registrationService: RegistrationService,
    private router: Router, // Make sure this line is present
    private snackBar: MatSnackBar

  ) {
    this.registrationForm = this.formBuilder.group({
      userType: ['seeker'], // Default value is 'seeker'
      // Other form controls based on user type
      // For Seeker
      uFirstname: ['', Validators.required],
      uLastname: ['', Validators.required],
      uEmail: ['', [Validators.required, Validators.email]],
      uPassword: ['', Validators.required],
      // For Recruiter
      cName: ['', Validators.required],
      cEmail: ['', [Validators.required, Validators.email]],
      cPhno:['', [Validators.required,]],
      cPassword: ['', Validators.required]
    });
  }

  onRegistrationSubmit(userType: 'seeker' | 'recruiter') {
    
  
    if (userType === 'seeker') {
      const seekerData: SeekerRegister = {
        uFirstname: this.registrationForm.value.uFirstname,
        uLastname: this.registrationForm.value.uLastname,
        uEmail: this.registrationForm.value.uEmail,
        uPassword: this.registrationForm.value.uPassword
      };
      this.registrationService.registerSeeker(seekerData).subscribe(
        (response: any) => {
          console.log('Seeker registered:', response);
          this.router.navigate(['/login']); // Navigate to seeker dashboard
          this.snackBar.open('Seeker Registration successful!', 'Dismiss', { duration: 3000 });
          // Handle registration success
        },
        error => {
          console.error('Seeker registration error:', error);
          this.snackBar.open('Please Try Again!', 'Dismiss', { duration: 3000 });
          // Handle registration error
        }
      );
    } else if (userType === 'recruiter') {
      const recruiterData: CompanyRegister = {
        cName: this.registrationForm.value.cName,
        cEmail: this.registrationForm.value.cEmail,
        cPhno: this.registrationForm.value.cPhno,
        cPassword: this.registrationForm.value.cPassword
      };
      this.registrationService.registerRecruiter(recruiterData).subscribe(
        (response: any) => {
          console.log('Recruiter registered:', response);
          this.router.navigate(['/login']); // Navigate to seeker dashboard
          this.snackBar.open('Recruiter Registration successful!', 'Dismiss', { duration: 3000 });
          // Handle registration success
        },
        error => {
          console.error('Recruiter registration error:', error);
          this.snackBar.open('Please Try Again!', 'Dismiss', { duration: 3000 });
          // Handle registration error
        }
      );
    }
  }
  
}