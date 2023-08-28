import { Component } from '@angular/core';

@Component({
  selector: 'app-c-filter',
  templateUrl: './c-filter.component.html',
  styleUrls: ['./c-filter.component.css']
})
export class CFilterComponent {
  selectedSalary: number = 2;

  updateSelectedSalary(event: any) {
    this.selectedSalary = event.target.value;
  }


}
