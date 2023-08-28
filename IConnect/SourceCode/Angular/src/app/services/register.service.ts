import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SeekerRegister,CompanyRegister } from '../model/register.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private apiUrl = 'https://localhost:7038/api/Home/'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}  

  registerSeeker(registrationData: SeekerRegister): Observable<any> {
    return this.http.post(`${this.apiUrl}SeekerRegister`, registrationData);
  }

  registerRecruiter(registrationData: CompanyRegister): Observable<any> {
    return this.http.post(`${this.apiUrl}CompanyRegister`, registrationData);
  }
}
