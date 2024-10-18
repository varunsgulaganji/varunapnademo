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
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrl: './java.component.css'
})
export class JavaComponent {
  java: Course[] = [
    {image:"java.jpeg", name:"Java", desc:"Find the right instructor for you. Choose from many topics, skill levels, and languages.",price:"19999", orgprice:"17999", stars:"4" },
    {image:"java2.jpeg", name:"Java", desc:"The specialization consists of three intensive courses: Fundamentals of Java Programming.",price:"22499", orgprice:"21299", stars:"5" },
    {image:"java3.jpeg", name:"Java", desc:" Blocks for developing Java applications.",price:"29999", orgprice:"22599", stars:"3" }
  ]
}
