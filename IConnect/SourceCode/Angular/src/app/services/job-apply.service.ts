import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobApplication } from '../model/applytable.model';

@Injectable({
  providedIn: 'root'
})
export class JobApplicationService {
  private apiUrl = 'https://localhost:7038/api/Seeker/JobApply';

  constructor(private http: HttpClient) {}

  applyJobApplication(application: JobApplication): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.post(url, application);
  }
}
