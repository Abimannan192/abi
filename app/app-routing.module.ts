import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'movies',
    component:MoviesComponent
  },
  {
    path:'addMovie',
    component:AddMovieComponent
  },
  {
    path:'bookTicket',
    component:BookTicketComponent
  },
  {
    path:'',
    component:MoviesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
