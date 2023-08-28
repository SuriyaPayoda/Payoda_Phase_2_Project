import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  selectedSalary: number = 2;

  updateSelectedSalary(event: any) {
    this.selectedSalary = event.target.value;
  }

}
