import { Component, OnInit, Input } from '@angular/core';
import { GemModel } from '../../gemmodel';
import { ReviewModel } from '../../reviewmodel';
import { AvatarService } from '../avatar.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit { 
    @Input() gem: GemModel;
    newReview: ReviewModel;
    
    submitClicked() {
        this.gem.reviews.push(this.newReview); //reviews is an array
        //TODO: this does not save reviews. has to be sent to a persisted data store
        this.ngOnInit();
    }
    
    
    
  constructor(private avatarService: AvatarService) {
  }

  ngOnInit() {
      this.newReview = {
          id: -1,
          createddate: '', 
          body: '',
          rating: 5,
          author: '',
      }
  }

}