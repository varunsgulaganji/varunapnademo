import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  letters: string[] = ['D', 'E', 'L', 'T', 'A','-','W','e','b','','D','e','v','e','l','o','p','m','e','n','t'];
  displayedLetters: string[] = [];

  ngOnInit() {
    this.displayLettersOneByOne();
  }

  displayLettersOneByOne() {
    let index = 0;
    const interval = setInterval(() => {
      if (index < this.letters.length) {
        this.displayedLetters.push(this.letters[index]);
        index++;
      } else {
        clearInterval(interval);
      }
 },1000);
}
}
