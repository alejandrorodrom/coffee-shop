import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ReviewModel } from '../../models/review.model';
import { ReviewService } from '../../http/review/review.service';

@Injectable({
  providedIn: 'root'
})
export class ReviewResolver implements Resolve<ReviewModel[]>{

  constructor(
    private reviewService: ReviewService
  ) {
  }

  resolve(): Observable<ReviewModel[]> {
    return this.reviewService.getReview();
  }
}
