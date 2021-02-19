import { AthuService } from './../athu.service';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
error:string="";

constructor( private _AthuService:AthuService,private _Router:Router){}
registerform:FormGroup=new FormGroup({
  first_name:new FormControl (null,[Validators.minLength(3),Validators.maxLength(7)]),
  last_name:new FormControl(null,[Validators.minLength(3),Validators.maxLength(7)]),
  age:new FormControl(null,[Validators.min(10),Validators.max(80)]),
  email:new FormControl(null,[Validators.email]),
  password:new FormControl(null,[Validators.required]),


})
submiit(registerform:FormGroup){
 this._AthuService.register(registerform.value).subscribe((response)=>{

  if(response.message==='success'){
  this._Router.navigate(['/login']);
  }
  else{
    this.error=response.message;
    
  }




}


)


}

  ngOnInit(): void {
  }

}
