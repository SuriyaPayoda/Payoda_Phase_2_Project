import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { CAddprofilepopComponent } from '../c-addprofilepop/c-addprofilepop.component';
import { JobService } from '../services/job.service'; 
import { Job } from '../model/job.model';


@Component({
  selector: 'app-c-addjob',
  templateUrl: './c-addjob.component.html',
  styleUrls: ['./c-addjob.component.css']
})
export class CAddjobComponent implements OnInit {
  displayedColumns: string[] = ['serialNumber', 'jRole', 'jSkill', 'jVacancy', 'jSalary', 'jContact', 'jTimeline', 'jLocation', 'actions'];
  dataSource = new MatTableDataSource<Job>();

  constructor(public dialog: MatDialog, private jobService: JobService) {}

  ngOnInit(): void {
    this.fetchJobData();
  }

  openDialog(): void {
    console.log('Opening dialog...');
    const dialogRef = this.dialog.open(CAddprofilepopComponent, {
      width: '500px',
      data: {}
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed:', result);
    });
  }

  fetchJobData(): void {
    const storedUserData = JSON.parse(sessionStorage.getItem('recruiter') || '{}');
    if (storedUserData && storedUserData.userId) {
      const cid = storedUserData.userId as number; 
      this.jobService.getJobsByCompanyId(cid).subscribe(jobs => {
        this.dataSource.data = jobs;
      });
    }
  }

  editJob(row: any): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '700px', 
      height:'650px',
      data: row 
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
     
      }
    });
  }



deleteJob(row: Job): void {
  const dialogRef = this.dialog.open(DeleteDialogComponent, {
    height: '100px',
    width: '400px',
    data: row
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.jobService.deleteJob(row.jId).subscribe(
        () => {
    
          this.dataSource.data = this.dataSource.data.filter(job => job.jId !== row.jId);
        },
        (error: any) => {
          console.error('Error deleting job:', error);
        }
      );
    }
  });
}
}