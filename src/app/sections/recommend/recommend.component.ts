import { Component } from '@angular/core';
import { AppDataService } from '../../app-data.service';
import { FormsModule } from '@angular/forms';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-recommend',
  imports: [ FormsModule, MovieCardComponent ],
  templateUrl: './recommend.component.html',
  styles: `
    div.row { margin-top: 0.5cm; }
  `
})
export class RecommendComponent {
  constructor (private appData:AppDataService) {}

  private movies:any[] = []
  pattern:string = ""
  private selectedMovie:any = undefined
  userToRecommend:string = "0"
  
  getLoggedUser() {
    return this.appData.getLoggedUser()
  }

  getNameById(id:string) {
    return this.appData.getNameById(id)
  }

  getUsers() {
    return this.appData.getUsers()
  }

  getMovies() {
    return this.movies
  }

  getSelectedMovie() {
    return this.selectedMovie
  }

  recommend() {
    //comprobar si todos los campos están completos
    if (this.userToRecommend != "0" && this.selectedMovie != undefined) {
      this.appData.recommend(this.userToRecommend, this.selectedMovie)
    }
  }

  searchMoviesByString(cadena:string) {
    this.appData.getMoviesByString(cadena).subscribe( (data:any) => {
      this.movies = data.Search
    })
  }

  setMovieToRecommend(m:any) {
    this.selectedMovie = m
  }

}
