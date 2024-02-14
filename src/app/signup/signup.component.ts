import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private signupService:LoginServiceService){}

  username:string = ""
  password:string = ""

  errorMessage = ""
  signupError = false;
  successMessage = ""
  signupSuccess = false;

  formSubmitted = false;

  signupHandler(){
    this.signupService.signup(this.username,this.password)
      .subscribe({
        next: (response:any) => {
          console.log("Sign Up Successful: ",response);
          this.successMessage = response.message;
          this.signupSuccess = true
          this.formSubmitted = true
        },
        error: (error) => {
          console.log(error.error.message);
          this.errorMessage = error.error.message
          this.signupError = true
          this.formSubmitted = true
        }
      })
  }
}
