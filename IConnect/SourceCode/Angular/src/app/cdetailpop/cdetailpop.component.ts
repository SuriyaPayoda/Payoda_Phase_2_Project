import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JobData } from '../model/jobdetail.model';
import { JobApplicationService } from '../services/job-apply.service';
import { JobApplication } from '../model/applytable.model';

@Component({
  selector: 'app-cdetailpop',
  templateUrl: './cdetailpop.component.html',
  styleUrls: ['./cdetailpop.component.css'],
})
export class CdetailpopComponent implements OnInit {
  job: JobData;
  skills: string = '';
  experience: number = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: JobData,
    private jobApplicationService: JobApplicationService
  ) {
    this.job = data;
  }

  ngOnInit(): void {}

  applyJob() {
    const storedUserData = JSON.parse(sessionStorage.getItem('seeker') || '{}');
    if (storedUserData && storedUserData.userId) {
      const userId = storedUserData.userId as number;
      const jobId = this.job.jId; 

      const tId = this.job.tName === 'Full Time' ? 1 : this.job.tName === 'Part Time' ? 2 : 0;

      const jobApplication: JobApplication = {
        cName: '',
        jRole: '',
        jId: jobId, 
        uId: userId,
        uSkill: this.skills,
        uExperience: this.experience,
        tId,
        jStatus: 'Pending',
      };

      this.jobApplicationService.applyJobApplication(jobApplication).subscribe(
        (response: any) => {
          console.log('Applied successfully:', response);
        },
        (error: any) => {
          console.error('Error applying for job:', error);
        }
      );
    }
  }
}
