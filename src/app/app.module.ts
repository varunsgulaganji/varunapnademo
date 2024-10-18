import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { CauroselComponent } from './caurosel/caurosel.component';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CauroselhomeComponent } from './cauroselhome/cauroselhome.component';
import { SigmaComponent } from './sigma/sigma.component';
import { ContactusformComponent } from './contactusform/contactusform.component';
import { FooterComponent } from './footer/footer.component';
import { LastfooterComponent } from './lastfooter/lastfooter.component';
import { DsComponent } from './ds/ds.component';
import { CComponent } from './c/c.component';
import { WebComponent } from './web/web.component';
import { PythonComponent } from './python/python.component';
import { JavaComponent } from './java/java.component';
import { CardComponent } from './card/card.component';
import { StarComponent } from './star/star.component';
import { Home1Component } from './home1/home1.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { AboutcompanyComponent } from './aboutcompany/aboutcompany.component';
import { TeamComponent } from './team/team.component';
import { CardteamComponent } from './cardteam/cardteam.component';
import { HoverDirective } from './hover.directive';
import { Hover1Directive } from './hover1.directive';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    LoginComponent,
    ContactComponent,
    CauroselComponent,
    CauroselhomeComponent,
    SigmaComponent,
    ContactusformComponent,
    FooterComponent,
    LastfooterComponent,
    DsComponent,
    CComponent,
    WebComponent,
    PythonComponent,
    JavaComponent,
    CardComponent,
    StarComponent,
    Home1Component,
    AboutmeComponent,
    AboutcompanyComponent,
    TeamComponent,
    CardteamComponent,
    HoverDirective,
    Hover1Directive,
    RegisterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
