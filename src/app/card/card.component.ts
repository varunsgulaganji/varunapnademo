import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input("src") course: any = ""
  expand:boolean = false;

  public onclick(){
    this.expand = !this.expand
    console.log('expand', this.expand)
  }

  // contactusform: boolean = false
  // displaymap:boolean = false
  // public oncontactus(){
  //   this.contactusform = !this.contactusform
  // }
}
