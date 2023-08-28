// services/company.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../model/companyprofile.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyProfileService {
  private apiUrl = 'https://localhost:7038/api/Company';

  constructor(private http: HttpClient) {}

  getCompanyDetails(cid: number): Observable<Company> {
    const url = `${this.apiUrl}/GetCompanydetails?cid=${cid}`;
    return this.http.get<Company>(url);

  }

}

