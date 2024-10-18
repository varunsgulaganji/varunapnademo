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
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrl: './web.component.css'
})
export class WebComponent {
  web: Course[] = [
    {image:"web1.jpeg", name:"Web Development", desc:"web development is not nearly as difficult as it might seem to non-programmers",price:"19999", orgprice:"17999", stars:"3" },
    {image:"web2.jpeg", name:"Web Development", desc:"Front End Development Skills and so on.",price:"22499", orgprice:"21299", stars:"4" },
    {image:"web3.jpeg", name:"Web Development", desc:"  the field of web development is experiencing growth and transformation in 2024 ",price:"29999", orgprice:"22599", stars:"3" }
  ]
}
