import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ReviewModel } from '../../models/review.model';
import { Review } from '../../interfaces/review.interface';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(
    private http: HttpClient
  ) { }

  getReview(): Observable<ReviewModel[]> {
    return this.http
      .get<Review[]>('reviews')
      .pipe(
        map(value => value.map(review => new ReviewModel(review)))
      );
  }
}
