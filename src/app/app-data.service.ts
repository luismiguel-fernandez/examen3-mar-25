import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  private users:any[] = []
  private loggedUser:string
  private recommendations:any[]

  constructor(private api:ApiService) {
    this.api.getUsers().subscribe( (data:any) => {
      this.users = data
    })
    this.recommendations = JSON.parse(localStorage.getItem("recommendations") || "[]")
    this.loggedUser = localStorage.getItem("loggedUser") || "0"
  }

  getLoggedUser() {
    return this.loggedUser
  }

  getNameById(id:string) {
    let usuarioBuscado = this.users.find( (u:any) => u.id == id )
    if (usuarioBuscado) return usuarioBuscado.name
    else return "Anonymous"
  }

  getUserLogged() {
    return this.loggedUser
  }

  getUsers() {
    return this.users
  }

  getMoviesByString(cadena:string) {
    return this.api.getMoviesByString(cadena)
  }

  getMoviesRecommendedFrom(userId:string) {
    return this.recommendations.filter( (r:any) => r.fromUser == userId )
  }

  getMoviesRecommendedTo(userId:string) {
    return this.recommendations.filter( (r:any) => r.toUser == userId )
  }

  recommend(userToRecommend:string, movieToRecommend:any) {
    //comprobar si hay un usuario logueado que hará de remitente
    if (this.loggedUser != "0") {
      this.recommendations.push({
        fromUser: this.loggedUser,
        toUser: userToRecommend,
        movie: movieToRecommend
      })
      this.saveLS()
      alert("Recommended!")
      console.table(this.recommendations)
      //MEJORA: implementar un TOAST de bootstrap
    }
  }

  saveLS() {
    localStorage.setItem("recommendations", JSON.stringify(this.recommendations))
    localStorage.setItem("loggedUser", this.loggedUser)
  }

  setUserLogged(userId:string) {
    this.loggedUser = userId
    this.saveLS()
  }
}
