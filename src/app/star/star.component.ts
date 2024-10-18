import { Component } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})
export class StarComponent {
  star : boolean [] = [false,false,false,false,false];
  nos : number = 0;
  // /ratings : number =4.5;/

  public onStarClick(cnt : number){
    this.nos = cnt
    this.star = [false,false,false,false,false];
    for(let i=0;i<cnt;i++)
      this.star[i] = true;
  }

  onButtonClick() {
    alert('Button clicked!');
}
}
