import { Component } from '@angular/core';

interface Course{
  image:string
  name:string
  desc:string
  price:string
  orgprice:string
  stars: string
}


@Component({
  selector: 'app-ds',
  templateUrl: './ds.component.html',
  styleUrl: './ds.component.css'
})
export class DsComponent {
  ds: Course[] = [
    {image:"ds1.jpeg", name:"Data Structure", desc:"A complete package of video lectures, practice problems, discussion forums, and contests. ",price:"4999", orgprice:"3999", stars:"3" },
    {image:"ds2.jpeg", name:"Data Structure", desc:"Upskill Yourself for a Career in Software Engineering with our Software Engineering Course",price:"4499", orgprice:"3299", stars:"3" },
    {image:"ds3.jpeg", name:"Data Structure", desc:"In this online course,we consider the common data structures that are used in various problems.",price:"3999", orgprice:"3599", stars:"4" }
  ]
}
