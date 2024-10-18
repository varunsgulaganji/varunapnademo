import { Component } from '@angular/core';

@Component({
  selector: 'app-sigma',
  templateUrl: './sigma.component.html',
  styleUrl: './sigma.component.css'
})
export class SigmaComponent {
  contactusform: boolean = false
  displaymap:boolean = false
  public oncontactus(){
    this.contactusform = !this.contactusform
  }
  }

