import { Router } from '@angular/router';
import { MovyService } from './../movy.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 treindingmovy:any[]=[];
 treindingtv:any[]=[];
 poster:any="https://image.tmdb.org/t/p/w500";
term:any;

  constructor( _MovyService:MovyService,private _Router:Router ) {


    _MovyService.trendingmovy('movie').subscribe((datamovy)=>{

      this.treindingmovy=datamovy.results.slice(0,10);
    })
    _MovyService.trendingmovy('tv').subscribe((datamovy)=>{

      this.treindingtv=datamovy.results.slice(0,10);
    })
   
   }
   movies(){
     this._Router.navigate(['/movies'])
   }

  
  ngOnInit(): void {
  }

}
