import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserJob } from '../model/userjob.model';

@Injectable({
  providedIn: 'root'
})
export class UserJobService {
  private baseUrl = 'https://localhost:7038/api/Seeker';

  constructor(private http: HttpClient) {}

  getUserJobs(): Observable<UserJob[]> {
    return this.http.get<UserJob[]>(`${this.baseUrl}/CompanyDetails`);
  }
}
