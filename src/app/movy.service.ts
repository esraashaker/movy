import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovyService {

  constructor(  private  _HttpClient:HttpClient) { 
   }
   trendingmovy(media:any ):Observable<any>{
    return  this._HttpClient.get(`https://api.themoviedb.org/3/trending/${media}/week?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2YccXbBXiTsfTSl5tfS5qJM0D1UkgNKMGQwoXv41FrZVT2NLZifLxrt1s`);
  }
  movydetails(id:any ):Observable<any>{
    return  this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2YccXbBXiTsfTSl5tfS5qJM0D1UkgNKMGQwoXv41FrZVT2NLZifLxrt1s`);
  }
}
