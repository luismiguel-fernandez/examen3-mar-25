import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starsRating'
})
export class StarsRatingPipe implements PipeTransform {

  transform(value: string): string {
    let rating = Math.floor(parseFloat(value) / 2)
    return "★".repeat(rating) + "✰".repeat(5 - rating);
  }

}
