import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobEdit } from '../model/jobedit.model';

@Injectable({
  providedIn: 'root'
})
export class JobUpdateService {
  private apiUrl = 'https://localhost:7038/api/Company';

  constructor(private http: HttpClient) {}

  updateJob(jId: number, editJob: JobEdit): Observable<any> {
    const url = `${this.apiUrl}/UpdateJob?Jid=${jId}`;
    return this.http.put(url, editJob);
  }
}
