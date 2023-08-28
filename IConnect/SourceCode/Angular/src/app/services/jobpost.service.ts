import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../model/job.model'; // Import your Job interface

@Injectable({
  providedIn: 'root'
})
export class JobPostService {
  private apiUrl = 'https://localhost:7038/api/Company/JobPost'; // Update the API URL

  constructor(private http: HttpClient) {}

  postJob(job: Job): Observable<any> {
    return this.http.post(this.apiUrl, job);
  }

 
}
