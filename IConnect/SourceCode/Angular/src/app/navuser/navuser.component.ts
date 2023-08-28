import { Component } from '@angular/core';

@Component({
  selector: 'app-navuser',
  templateUrl: './navuser.component.html',
  styleUrls: ['./navuser.component.css']
})
export class NavuserComponent {

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
