import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CdetailpopComponent } from '../cdetailpop/cdetailpop.component';
import { FilterComponent } from '../filter/filter.component';
import { PageEvent } from '@angular/material/paginator';
import { UserJobService } from '../services/company-details.service';
import { UserJob } from '../model/userjob.model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css'],
})
export class DiscoverComponent implements OnInit {
  searchBoxWidth: number = 460;
  selectedJob: UserJob | undefined; // Initialize as undefined
  pageSlice: UserJob[] = [];
  pageSize = 4;
  cards: UserJob[] = [];

  constructor(
    public dialog: MatDialog,
    private userJobService: UserJobService
  ) {}

  ngOnInit(): void {
    this.fetchJobData();
  }

  fetchJobData(): void {
    this.userJobService.getUserJobs().subscribe(
      (jobData: UserJob[]) => {
        this.cards = jobData;
        this.filteredCards = this.cards;
        this.pageSlice = this.filteredCards.slice(0, this.pageSize);
      },
      (error: any) => {
        console.error('Error fetching job data:', error);
      }
    );
  }

  openPopup() {
    const dialogRef = this.dialog.open(FilterComponent, {
      width: '35%',
      height: '450px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog() {
    if (this.selectedJob) { // Check if selectedJob is not undefined
      const dialogRef = this.dialog.open(CdetailpopComponent, {
        width: '50%',
        height: '570px',
        data: this.selectedJob,
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }

  OnPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.pageSlice = this.filteredCards.slice(startIndex, endIndex);
  }

  showDetails(job: UserJob) {
    this.selectedJob = { ...job };
    this.openDialog(); // Open the dialog to display job details
  }

  searchText: string = '';
  filteredCards: UserJob[] = [];

  applySearch() {
    if (this.searchText === '') {
      this.filteredCards = this.cards;
    } else {
      this.filteredCards = this.cards.filter(
        (card) =>
          card.jRole.toLowerCase().includes(this.searchText.toLowerCase()) ||
          card.cName.toLowerCase().includes(this.searchText.toLowerCase()) ||
          card.jLocation.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
    this.pageSlice = this.filteredCards.slice(0, this.pageSize); // Reset pagination
  }

  clearSearch() {
    this.searchText = '';
    this.filteredCards = this.cards;
    this.pageSlice = this.filteredCards.slice(0, this.pageSize); // Reset pagination
  }
}
