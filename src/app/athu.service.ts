import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AthuService {
  constructor(private _HttpClient:HttpClient , private _Router:Router) {
    if(localStorage.getItem('mydataform'))

    {
    this.savecurentuserdata();
    }}
logout(){
  
  localStorage.removeItem('mydataform');
  this._Router.navigate(['/login']);
}

  
  curentuserdata:any=new BehaviorSubject(null);




  register(data:any):Observable<any>
  {
  return  this._HttpClient.post('https://routeegypt.herokuapp.com/signup',data)
  }
  loginfrme(dataform:any):Observable<any>{
    return this._HttpClient.post('https://routeegypt.herokuapp.com/signin',dataform)
    }
    

savecurentuserdata()
{
  let codedata:any=localStorage.getItem('mydataform');
  let decodedata=jwtDecode(codedata);
  this.curentuserdata.next(decodedata);
}
}