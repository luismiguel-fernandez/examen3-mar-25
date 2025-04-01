import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlUsers:string = "https://jsonplaceholder.typicode.com/users"

  private urlMoviesByString:string = "https://www.omdbapi.com/?apikey=1171f65e&s="
  private urlMoviesById:string = "https://omdbapi.com/?apikey=1171f65e&i="

  constructor(private http:HttpClient) { }

  getUsers() {
    return this.http.get(this.urlUsers);
  }

  getMovieById(id:string) {
    return this.http.get(this.urlMoviesById + id);
  }

  getMoviesByString(cadena:string) {
    return this.http.get(this.urlMoviesByString + cadena);
  }
}
