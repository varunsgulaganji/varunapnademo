import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {

  constructor(private http:HttpClient) { }
  url:string = "   http://127.0.0.1:5000/userdata"
  // url:string = " http://localhost:3000/contactdetails"

  public FetchAll(callback:any){
    this.http.get(this.url).subscribe(function(data:any){
      callback(data);
    })
  }
  
  
  public FetchById(email:any,callback:any){
    this.http.get(this.url + '/' + email).subscribe(function(data:any){
      callback(data);
    })
  }
  
  public Add(user:any, callback: any){
    this.http.post(this.url, user).subscribe((data)=>{
      callback(data)
    })
  }
}
