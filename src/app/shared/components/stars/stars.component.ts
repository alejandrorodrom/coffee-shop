import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent {

  @Input() score: 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5 = 0;

  constructor() { }

  oneStar(): string {
    if (this.score === 0) {
      return 'fa-regular fa-star';
    } else if (this.score > 0 && this.score === 0.5) {
      return 'fas fa-star-half-alt';
    } else if (this.score > 0 && this.score !== 0.5) {
      return 'fas fa-star';
    } else {
      return 'fa-regular fa-star'
    }
  }

  twoStar(): string {
    if (this.score === 0) {
      return 'fa-regular fa-star';
    } else if (this.score > 1 && this.score === 1.5) {
      return 'fas fa-star-half-alt';
    } else if (this.score > 1 && this.score !== 1.5) {
      return 'fas fa-star';
    } else {
      return 'fa-regular fa-star'
    }
  }

  threeStar(): string {
    if (this.score === 0) {
      return 'fa-regular fa-star';
    } else if (this.score > 2 && this.score === 2.5) {
      return 'fas fa-star-half-alt';
    } else if (this.score > 2 && this.score !== 2.5) {
      return 'fas fa-star';
    } else {
      return 'fa-regular fa-star'
    }
  }

  fourStar(): string {
    if (this.score === 0) {
      return 'fa-regular fa-star';
    } else if (this.score > 3 && this.score === 3.5) {
      return 'fas fa-star-half-alt';
    } else if (this.score > 3 && this.score !== 3.5) {
      return 'fas fa-star';
    } else {
      return 'fa-regular fa-star'
    }
  }

  fiveStar(): string {
    if (this.score === 0) {
      return 'fa-regular fa-star';
    } else if (this.score > 4 && this.score === 4.5) {
      return 'fas fa-star-half-alt';
    } else if (this.score > 4 && this.score !== 4.5) {
      return 'fas fa-star';
    } else {
      return 'fa-regular fa-star'
    }
  }

}
