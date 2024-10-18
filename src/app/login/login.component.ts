import { Component } from '@angular/core';
import { SignservicesService } from '../signservices.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

constructor(private services:SignservicesService){}

// onSubmit(form: any) {
//   if (form.valid) {
//     console.log('Form submitted:', form.value);
//   } else {
//     console.log('Form is invalid');
//   }
// }
signupsuccess: boolean=false;


public onfetchbyid(email:any){
  this.services.FetchById(email,(data:any) => {
  console.log(data);  
})
}

// public onSubmit(fg:any){
//   this.services.Add(fg.value,(data:any) => {
// console.log(data)
//   })
// }


public onSubmit(fg: any){
  console.log(fg.value)
  
  this.services.Add(fg.value, (data:any)=>{
   
    console.log(data)
  })
  this.signupsuccess = true
}










}
