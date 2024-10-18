import { Component } from '@angular/core';
import { RegisterserviceService } from '../registerservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private services: RegisterserviceService){}
// onSubmit(form: any) {
//   if (form.valid) {
//     console.log('Form submitted:', form.value);
//   } else {
//     console.log('Form is invalid');
//   }
// }
contactsuccess: boolean = false;

public onfetchbyid(email:any){
  this.services.FetchById(email,(data:any) => {
  console.log(data);  
})
}


public onSubmit(fg: any){
  console.log(fg.value)

  this.services.Add(fg.value, (data:any)=>{
   
    console.log(data)
  })
  this.contactsuccess = true
}
}
