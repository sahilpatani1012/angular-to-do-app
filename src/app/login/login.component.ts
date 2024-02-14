import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginServiceService } from '../login-service.service';
import { Router,RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

constructor(private loginService:LoginServiceService, private router:Router){ }

  username:string = ""
  password:string = ""

  credentialsError:boolean = false;

  loginHandler(){
    this.loginService.login(this.username,this.password)
      .subscribe({
        next: (response) => {
          console.log("Login Successful: ",response);
          this.credentialsError = false;
          this.router.navigate(["/todos"]);
        },
        error: (error) => {
          console.log("Login error: ",error); 
          this.credentialsError = true
        }
      });
  }
  
}
