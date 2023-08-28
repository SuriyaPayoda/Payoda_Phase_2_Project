import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { JobPostService } from '../services/jobpost.service'; // Import your JobPostService
import { Job } from '../model/job.model'; // Import your Job interface



@Component({
  selector: 'app-c-addprofilepop',
  templateUrl: './c-addprofilepop.component.html',
  styleUrls: ['./c-addprofilepop.component.css']
})
export class CAddprofilepopComponent implements OnInit {
  jobForm!: FormGroup;
  cid: any;


  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CAddprofilepopComponent>,
    private jobPostService: JobPostService
  ) {}

  ngOnInit() {
    let getdata = JSON.parse(sessionStorage.getItem('recruiter') || '{}');
    this.cid = getdata.userId;

    this.initializeForm();
  }

  initializeForm() {
    this.jobForm = this.formBuilder.group({
      jRole: ['', Validators.required],
      jSkill: ['', Validators.required],
      jMinexperience: ['', Validators.required],
      jMaxexperience: ['', Validators.required],
      jVacancy: ['', Validators.required],
      jSalary: ['', Validators.required],
      jHighlight: [''],
      jContact: [''],
      jTimeline: [''],
      jLocation:[''],
      tName:[''],
      // ... other form controls ...
    });
  }

  onSaveClick() {
    if (this.jobForm.valid) {
      const formData: Job = {
        jId:this.jobForm.get('Jid')?.value,
        cId: this.cid,
        jRole: this.jobForm.get('jRole')?.value,
        jSkill: this.jobForm.get('jSkill')?.value,
        jMinexperience: this.jobForm.get('jMinexperience')?.value,
        jMaxexperience: this.jobForm.get('jMaxexperience')?.value,
        jVacancy: this.jobForm.get('jVacancy')?.value,
        jSalary: this.jobForm.get('jSalary')?.value,
        jHighlight: this.jobForm.get('jHighlight')?.value,
        jContact: this.jobForm.get('jContact')?.value,
        jTimeline: this.jobForm.get('jTimeline')?.value,
        jLocation: this.jobForm.get('jLocation')?.value,
        jUpdatedon:this.jobForm.get('jUpdatedon')?.value,
        tName: this.jobForm.get('tName')?.value,
        
      };

      this.jobPostService.postJob(formData).subscribe(
        response => {
          console.log('Job posted successfully:', response);
          this.dialogRef.close(formData);
        },
        error => {
          console.error('Error posting job:', error);
        }
      );
    }
  }

  onCancelClick() {
    this.dialogRef.close();
  }
}
