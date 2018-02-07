import { Component, OnInit, Input } from '@angular/core';
import { GemModel } from '../../gemmodel';
import { ReviewModel } from '../../reviewmodel';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit { 
    @Input() gem: GemModel;

    newReview: ReviewModel;
  constructor() { }

  ngOnInit() {
      this.newReview = {
          id: -1, 
          createddate: "", 
          body: "",
          rating: 5,
          author: "",
      }
  }

}