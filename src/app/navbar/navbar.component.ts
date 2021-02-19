import { AthuService } from './../athu.service';
import { Component, OnInit } from '@angular/core'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  islog:boolean=false;

  constructor(public _AthuServices:AthuService) { 
    _AthuServices.curentuserdata.subscribe(()=>{
      if(_AthuServices.curentuserdata.getValue()==null){

        this.islog=false;
       
       }
       else{
        this.islog=true;
        
       }       
    })
    
  }
  logoutt(){
    this._AthuServices.logout();
        }
  

  ngOnInit(): void {
    
  }
}
