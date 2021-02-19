import { AthuService } from './athu.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthoGuard implements CanActivate {
  constructor(private  _AthuService:AthuService ,private  _router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    
    {
    
      if(this._AthuService.curentuserdata.getValue()==null) {

      return  this._router.navigate(['/register']);
       } 
       else{
        return true;
      
       }
    
 
   
   
   
   
  }
  
}
