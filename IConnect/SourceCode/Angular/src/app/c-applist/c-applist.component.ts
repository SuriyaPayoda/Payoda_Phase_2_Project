import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { UserData } from '../model/Userdata.model';
import { CFilterComponent } from '../c-filter/c-filter.component';
import { CUserdetailpopComponent } from '../c-userdetailpop/c-userdetailpop.component';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-c-applist',
  templateUrl: './c-applist.component.html',
  styleUrls: ['./c-applist.component.css']
})
export class CApplistComponent implements OnInit {
  searchBoxWidth: number = 460;
  selectedUser: UserData | undefined; 
  pageSlice: UserData[] = [];
  pageSize = 4;
  
  constructor(public dialog: MatDialog, private userserviceService: UserserviceService) {}

  ngOnInit(): void {
    const storedUserData = JSON.parse(sessionStorage.getItem('recruiter') || '{}');
    console.log('Stored user data:', storedUserData);
  
    if (storedUserData && storedUserData.userId !== null) {
      const cid = storedUserData.userId as number; 
      console.log('CID:', cid); 
  
      this.userserviceService.getUsers(cid).subscribe(users => {
        console.log('API Response:', users);
        this.users = users;
        this.filteredUsers = this.users;
        this.pageSlice = this.users.slice(0, this.pageSize);
      });
    } else {
      console.log('userId is invalid or null'); 
    }
  }
  
  


  openPopup() {
    const dialogRef = this.dialog.open(CFilterComponent, {
      width: '35%',
      height: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog(user: UserData) {
    const dialogRef = this.dialog.open(CUserdetailpopComponent, {
      width: '50%',
      height: '550px',
      data: user // Pass the selected user to the dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  OnPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.pageSlice = this.filteredUsers.slice(startIndex, endIndex);
  }

  showDetails(user: UserData) {
    this.selectedUser = { ...user };
    this.openDialog(user); // Pass the selected user to the openDialog method
  }

  users: UserData[] = []; // Initialize as empty array

  searchText: string = '';
  filteredUsers: UserData[] = [];

  applySearch() {
    if (this.searchText === '') {
      this.filteredUsers = this.users;
    } else {
      this.filteredUsers = this.users.filter(
        user =>
          user.uFirstname.toLowerCase().includes(this.searchText.toLowerCase()) ||
          user.uLastname.toLowerCase().includes(this.searchText.toLowerCase()) ||
          user.uCourse.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
    this.pageSlice = this.filteredUsers.slice(0, this.pageSize);
  }

  clearSearch() {
    this.searchText = '';
    this.filteredUsers = this.users;
    this.pageSlice = this.filteredUsers.slice(0, this.pageSize);
  }
}
