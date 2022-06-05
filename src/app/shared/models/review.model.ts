import { Review } from '../interfaces/review.interface';

export class ReviewModel {
  comment: string;
  image: string;
  name: string;
  score:  0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5 = 0;

  constructor(data: Review) {
    this.comment = data.comment;
    this.image = data.image;
    this.name = data.name;
    this.score = data.score;
  }

}
