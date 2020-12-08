import { Component, OnInit } from '@angular/core';
import { ReviewDataService } from '../review-data.service';

@Component({
  selector: 'app-review-tool',
  templateUrl: './review-tool.component.html',
  styleUrls: ['./review-tool.component.css']
})
export class ReviewToolComponent implements OnInit {
  newtitle :string;
  newdate :string;
  newreview :string;
  newscore :number;
  constructor(
    private rvService: ReviewDataService // inject service
  ) { }

  ngOnInit( ): void {}

  add() {
    console.log(this.newtitle, this.newdate, this.newreview, this.newscore);
    this.rvService.submit(this.newtitle, this.newdate, this.newreview, this.newscore)
  }

}
