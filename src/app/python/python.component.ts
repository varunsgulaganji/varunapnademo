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
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrl: './python.component.css'
})
export class PythonComponent {
  python: Course[] = [
    {image:"python.png", name:"Python", desc:"Python for Machine Learning & Data Science Masterclass·Algorithmic Trading A-Z with Python,Machine Learning & AWS..",price:"19999", orgprice:"17999", stars:"4" },
    {image:"python2.jpeg", name:"Python", desc:"Best Python Training in Bangalore by Experts.Get 100% Placements & Live Practical Courses.Python Courses with quality Trainers.",price:"22499", orgprice:"21299", stars:"5" },
    {image:"python3.jpeg", name:"Python", desc:"Learn Python online at your own pace.Start today and improve your skills.",price:"29999", orgprice:"22599", stars:"4" }
  ]
}
