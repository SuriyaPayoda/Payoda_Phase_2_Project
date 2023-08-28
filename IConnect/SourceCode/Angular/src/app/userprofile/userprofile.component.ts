// userprofile.component.ts
import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../services/userprofile.service';
import { UserProfile } from '../model/Userdata.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  userProfile: UserProfile | undefined;
  userId: number | undefined; 

  constructor(
    private userProfileService: UserProfileService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const storedUserData = JSON.parse(sessionStorage.getItem('seeker') || '{}');
    this.userId = storedUserData.userId as number;
    console.log('uid:', this.userId); 

    // Fetch user profile
    if (this.userId) {
      this.fetchUserProfile();
    }
  }

  fetchUserProfile(): void {
    this.userProfileService.getUserProfile(this.userId!).subscribe(
      (userProfile: UserProfile) => {
        console.log('Received user profile:', userProfile); // Log the userProfile
        this.userProfile = userProfile;
      },
      (error: any) => {
        console.error('Error fetching user profile:', error);
      }
    );
  }
  
}
