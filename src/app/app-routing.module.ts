import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SigmaComponent } from './sigma/sigma.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {path:'sigma',component:SigmaComponent},
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'courses', component: CoursesComponent},
  {path:'login', component: LoginComponent},
  {path:'contact', component: ContactComponent},
  {path:'team', component: TeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
