import { Component } from '@angular/core';
import { AppDataService } from '../../app-data.service';
import { FormsModule } from '@angular/forms';
import { StarsRatingPipe } from '../../stars-rating.pipe';

@Component({
  selector: 'app-profiles',
  imports: [ FormsModule, StarsRatingPipe ],
  templateUrl: './profiles.component.html',
  styles: `
    div.row { margin-top: 1cm;}
  `
})
export class ProfilesComponent {

  selValue:string = ""

  constructor (private appData:AppDataService) {
  }

  ngOnInit(){
    let activeUser = this.appData.getLoggedUser()
    if (activeUser) {
      this.selValue = activeUser
    }
  }

  getMoviesRecommendedFrom(userId:string) {
    return this.appData.getMoviesRecommendedFrom(userId)
  }

  getMoviesRecommendedTo(userId:string) {
    return this.appData.getMoviesRecommendedTo(userId)
  }

  getNameById(id:string) {
    return this.appData.getNameById(id)
  }

  getUsers() {
    return this.appData.getUsers()
  }

  setUserLogged(userId:string) {
    this.appData.setUserLogged(userId)
  }
}
