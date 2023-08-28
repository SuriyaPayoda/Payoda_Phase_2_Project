import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JobEdit } from '../model/jobedit.model';
import { JobUpdateService } from '../services/updatjob.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {
  editJobForm!: FormGroup;
  jId: number; 

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EditDialogComponent>,
    private jobupdateService: JobUpdateService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.jId = data.jId; 
  }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {

    this.editJobForm = this.formBuilder.group({
      jRole: [this.data.jRole, Validators.required],
      jSkill: [this.data.jSkill, Validators.required],
      jMinexperience: [this.data.jMinexperience, Validators.required],
      jMaxexperience: [this.data.jMaxexperience, Validators.required],
      jVacancy: [this.data.jVacancy, Validators.required],
      jSalary: [this.data.jSalary, Validators.required],
      jHighlight: [this.data.jHighlight],
      jContact: [this.data.jContact],
      jTimeline: [this.data.jTimeline],
      jLocation: [this.data.jLocation],
      jUpdatedon: [this.data.jUpdatedon],
      tName: [this.data.tName]
    });
    
  }

  onUpdateClick() {
    if (this.editJobForm.valid) {
      const formData: JobEdit = this.editJobForm.value;

      this.jobupdateService.updateJob(this.jId, formData).subscribe(
        (response:any) => {
          console.log('Job updated successfully:', response);
  
          this.dialogRef.close(formData);
        },
        (error:any) => {
          console.error('Error updating job:', error);
        }
      );
    }
  }

  onCancelClick() {

    this.dialogRef.close();
  }
}
