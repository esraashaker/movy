import { AuthoGuard } from './autho.guard';
import { MoviesComponent } from './movies/movies.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from './home/home.component';
import{AboutComponent} from './about/about.component';
import{LoginComponent} from './login/login.component';
import{NavbarComponent} from './navbar/navbar.component';
import{NetworkComponent} from './network/network.component';
import{RegisterComponent} from './register/register.component';
import{TrendingComponent} from './trending/trending.component';
import{TvComponent} from './tv/tv.component';

const routes: Routes = [
  {path:'home' ,canActivate:[AuthoGuard], component:HomeComponent},
  {path:"about" ,canActivate:[AuthoGuard] , component:AboutComponent},
  {path:"network" ,canActivate:[AuthoGuard] , component:NetworkComponent},
  {path:"movies/:x" ,canActivate:[AuthoGuard] , component:MoviesComponent},
  {path:"trending",canActivate:[AuthoGuard] , component:TrendingComponent},
  {path:"tv" ,canActivate:[AuthoGuard], component:TvComponent},
  {path:"navbar" , component:NavbarComponent},

  {path:"register" , component:RegisterComponent},
  {path:'' , redirectTo:'register', pathMatch:"full"},
  {path:"login" , component:LoginComponent},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
