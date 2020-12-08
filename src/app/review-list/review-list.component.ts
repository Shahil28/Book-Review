import { Component, OnInit } from '@angular/core';
import { ReviewDataService } from '../review-data.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  public subscription;
  public reviewList;

  constructor(
    private rvService: ReviewDataService // inject service
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // onDestroy cancels the subscribe request
  }

  ngOnInit(): void {
    this.subscription = this.rvService.getSubscription().subscribe(msg => {
      this.reviewList = msg;
    });
    this.rvService.forceReload();
  }

}
