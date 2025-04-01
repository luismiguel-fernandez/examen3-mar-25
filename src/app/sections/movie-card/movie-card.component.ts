import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  imports: [],
  templateUrl: './movie-card.component.html',
  styles: ``
})
export class MovieCardComponent {
  @Input() movie:any
}
