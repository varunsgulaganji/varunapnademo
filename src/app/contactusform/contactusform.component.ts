import { Component } from '@angular/core';
import { ContactserviceService } from '../contactservice.service';

@Component({
  selector: 'app-contactusform',
  templateUrl: './contactusform.component.html',
  styleUrl: './contactusform.component.css'
})
export class ContactusformComponent {

constructor(private services: ContactserviceService){}
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

// public onSubmit(fg:any){
//   this.services.Add(fg.value,(data:any) => {
// console.log(data)
//   })
// }
public onSubmit(fg: any){
  console.log(fg.value)
  
  // let value=fg.value
  // value.phone= parseInt(value.phone)

  // console.log(value)
  this.services.Add(fg.value, (data:any)=>{
    // this.urldata1 = data
    console.log(data)
  })
  this.contactsuccess = true
}
}
