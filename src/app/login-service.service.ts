import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }


  login(username:string,password:string){
    const loginURL = "http://localhost:3000/api/login"
    const body = {
      userEmail : username,
      userPassword: password
    }
    return this.http.post(loginURL,body);
  }

  signup(username:string,password:string){
    const loginURL = "http://localhost:3000/api/signup"
    const body = {
      userEmail : username,
      userPassword: password
    }
    return this.http.post(loginURL,body);
  }
}
