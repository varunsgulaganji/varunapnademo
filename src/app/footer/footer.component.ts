import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

platforms = [
  { icon: 'fa fa-linkedin-square', url: 'https://www.linkedin.com/', name: 'Linkedin', description: 'Apna College' },
  { icon: 'fa fa-youtube-play', url: 'https://www.youtube.com/', name: 'Youtube', description: 'Aman DHATTARWAL' },
  { icon: 'fa fa-instagram', url: 'https://www.instagram.com/', name: 'Instagram', description: 'Apna College' }
];
}
