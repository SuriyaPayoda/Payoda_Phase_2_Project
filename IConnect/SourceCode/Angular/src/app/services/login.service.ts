import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from 'src/app/model/login.model';
import { ComLogin } from '../model/comlogin.model';
import { CompanyRegister, SeekerRegister } from '../model/register.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'https://localhost:7038/api/Home';

  constructor(private http: HttpClient) {}

  seekerLogin(credentials: Login): Observable<any> {
    const endpoint = '/SeekerLogin';
    return this.http.post(`${this.apiUrl}${endpoint}`, credentials);
  }

  companyLogin(credentials: ComLogin): Observable<any> {
    const endpoint = '/CompanyLogin';
    return this.http.post(`${this.apiUrl}${endpoint}`, credentials);
  }

  // Store user information in session storage
  storeUserInSession(user: any) {
    sessionStorage.setItem('userData', JSON.stringify(user));
  }

  // Retrieve user information from session storage
  getUserFromSession(): any {
    const userData = sessionStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
  }

  // Clear user information from session storage
  clearUserFromSession() {
    sessionStorage.removeItem('userData');
  }
}
