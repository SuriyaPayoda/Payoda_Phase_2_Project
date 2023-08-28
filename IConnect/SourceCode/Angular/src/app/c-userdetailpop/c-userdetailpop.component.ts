import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserData } from '../model/Userdata.model';

@Component({
  selector: 'app-cuserdetailpop',
  templateUrl: './c-userdetailpop.component.html',
  styleUrls: ['./c-userdetailpop.component.css']
})
export class CUserdetailpopComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public job: UserData) {}
}
