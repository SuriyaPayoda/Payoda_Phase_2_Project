import { Component, OnInit } from '@angular/core';
import { JobApplicationService } from '../services/job-apply.service';
import { JobApplicationServiceDisplay } from '../services/view-status.service';
import { JobApplication } from '../model/applytable.model';

@Component({
  selector: 'app-jobstatus',
  templateUrl: './jobstatus.component.html',
  styleUrls: ['./jobstatus.component.css']
})
export class JobstatusComponent implements OnInit {
  userJobApplications: JobApplication[] = [];
  userId!: number; // Use the non-null assertion operator here
  displayedColumns: string[] = ['cName', 'jRole', 'uSkill', 'uExperience', 'jStatus'];
  constructor(private jobApplicationServiceDisplay: JobApplicationServiceDisplay) {}

  ngOnInit(): void {
    const storedUserData = JSON.parse(sessionStorage.getItem('seeker') || '{}');
    if (storedUserData && storedUserData.userId) {
      this.userId = storedUserData.userId as number;
      this.fetchUserJobApplications();
    } else {
      console.error('User ID not found in sessionStorage.');
    }
  }

  fetchUserJobApplications(): void {
    this.jobApplicationServiceDisplay.getUserJobApplications(this.userId).subscribe(
      (jobApplications: JobApplication[]) => {
        this.userJobApplications = jobApplications;
      },
      (error: any) => {
        console.error('Error fetching job applications:', error);
      }
    );
  }
}