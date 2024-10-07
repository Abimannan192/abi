import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  httpClient = inject(HttpClient);

  createMovie(movieObj):Observable<any>{
    let token=localStorage.getItem('token') 
   const headers = {'Authorization':`Bearer ${token}`}
    return  this.httpClient.post<any>('http://localhost:3000/api/v1.0/moviebooking/addMovie',movieObj,{headers:new HttpHeaders(headers)});
  }

  getMovies(): Observable<any> {
    return this.httpClient.get<any>(`http://localhost:3000/api/v1.0/moviebooking/all`)
  }
}
