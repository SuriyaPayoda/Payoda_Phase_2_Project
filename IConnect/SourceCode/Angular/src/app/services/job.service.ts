import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../model/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiUrl = 'https://localhost:7038/api/Company'; // Replace with the actual API URL

  constructor(private http: HttpClient) {}

  getJobsByCompanyId(cid: number): Observable<Job[]> {
    const endpoint = `/ViewJob?cid=${cid}`;
    return this.http.get<Job[]>(`${this.apiUrl}${endpoint}`);
  }

  deleteJob(jobId: number): Observable<any> {
    const url = `${this.apiUrl}/DeleteJob?Jid=${jobId}`;
    return this.http.delete(url);
}
}
