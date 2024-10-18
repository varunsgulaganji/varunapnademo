import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  menuVisible = false;

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }
}
