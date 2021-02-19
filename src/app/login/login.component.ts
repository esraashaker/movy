import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AthuService } from './../athu.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
error:string="";

  constructor(private _AthuService:AthuService,private _Router:Router) { }
  
  loginform:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.email]),
    password:new FormControl(null,[Validators.required]),
  
  
  });
  login(loginform:FormGroup){
      this._AthuService.loginfrme(loginform.value).subscribe((response)=>{
     
       if(response.message==='success'){
       localStorage.setItem('mydataform',response.token)
       this._AthuService.savecurentuserdata();
       this._Router.navigate(['/home']);

       }
       else{
         this.error=response.message;
         
       }
     
      
     
     
     })
    
      
}
  ngOnInit(): void {
  }

}
