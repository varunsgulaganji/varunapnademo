import { Component } from '@angular/core';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  category: string = ""

  public onclick(crs: any){
    this.category = crs
  }
  crssections: string[] = ["Data Structures and Algorithms", "C++",  "Web development", "Full Stack Python", " Full Stack Java"]

}
