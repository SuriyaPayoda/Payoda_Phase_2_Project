import { Component, OnInit } from '@angular/core';
import { CompanyProfileService } from '../services/companyprofile.service';
import { Company } from '../model/companyprofile.model';

@Component({
  selector: 'app-c-profile',
  templateUrl: './c-profile.component.html',
  styleUrls: ['./c-profile.component.css']
})
export class CProfileComponent implements OnInit {
  company: Company | undefined;
  selectedFile: File | undefined;

  companyImagePath = 'F:/SS/Payoda Phase II Yogesh/C#/IConnect_Version07/Data/Company/';

  constructor(private companyProfileService: CompanyProfileService) {}

  ngOnInit(): void {
    const userId = JSON.parse(sessionStorage.getItem('recruiter') || '{}').userId;
    if (userId) {
      this.getCompanyDetails(userId);
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  getCompanyDetails(cid: number): void {
    this.companyProfileService.getCompanyDetails(cid).subscribe(
      (company: Company) => {
        this.company = company;
        console.log('Received company details:', company);
      },
      (error: any) => {
        console.error('Error fetching company details:', error);
      }
    );
  }

  constructImagePath(): string {
    if (this.company) {
      return `${this.companyImagePath}${this.company.cImage}`;
    }
    return '';
  }
}
