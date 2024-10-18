import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardteam',
  templateUrl: './cardteam.component.html',
  styleUrl: './cardteam.component.css'
})
export class CardteamComponent {
  teamMembers = [
    { image: 'team.jpeg', name: 'Alice Johnson', position: 'Software Engineer', bio: 'Alice specializes in front-end development with a passion for UI/UX design.' },
    { image: 'team4.jpeg', name: 'Zendya', position: 'Backend Developer', bio: 'Zendya focuses on server-side logic and database management.' },
    { image: 'team1.jpeg', name: 'Disha', position: 'Project Manager', bio: 'Disha ensures project milestones are met and communication flows smoothly.' },
    { image: 'team2.jpeg', name: 'Carol Davis', position: 'Full Stack Developer', bio: 'Carol ensures both front-end and back-end development' },
    { image: 'team3.jpeg', name: 'Nidhi', position: 'Project Manager', bio: 'Nidhi ensures project milestones are met and communication flows smoothly.' }
    // Add more members as needed
  ];

  ngOnInit() {}
}
