import { MovyService } from './../movy.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
movd:any;
movdetils:any;
poster:string="https://image.tmdb.org/t/p/w500";
constructor( public _ActivatedRoute:ActivatedRoute,private _MovyService:MovyService) { 
    this.movd=_ActivatedRoute.snapshot.params.x;
    this._MovyService.movydetails(this.movd).subscribe((data)=>{
 this.movdetils=data;
    })

  }
  ngOnInit(): void {
  }

}
