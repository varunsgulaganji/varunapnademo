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
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrl: './c.component.css'
})
export class CComponent {
  c: Course[] = [
    {image:"c++1.jpeg", name:"C++", desc:"C Programming Crash Course: Learn the Essentials in One Day",price:"3999", orgprice:"2999", stars:"4" },
    {image:"c++2.jpeg", name:"C++", desc:"C Programming: From Basics to Advanced",price:"2499", orgprice:"2299", stars:"3" },
    {image:"c++3.jpeg", name:"C++", desc:"Getting Started with C: A Beginner's Guide to Programming",price:"2999", orgprice:"2599", stars:"3" }
  ]
}
