import { Component, inject } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  movieService=inject(MovieService)
  movies:Movie[]=[];
  movieCounts: any[];
  theatreName:[];

  ngOnInit(): void {
 
    this.movieService.getMovies().subscribe({
     next:(res)=>{
      this.movies=res.getMovies.movies
    
      // this.movieCounts = new Array(this.movies.length).fill(0);
     }
     
     
    })
       
    
  }

}



// export class YourComponent {
//   movies = []; // Your movies data here
//   selectedMovie: any;
//   ticketQuantity: number;
//   selectedSeats: string;

//   selectMovie(movie) {
//       this.selectedMovie = movie;
//   }

//   bookTickets(movie) {
//       // Logic to book tickets
//       console.log(`Booking ${this.ticketQuantity} tickets for ${movie.movieName}`);
//   }
// }
