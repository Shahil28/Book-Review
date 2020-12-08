import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ReviewDataService {
  api_url = 'http://localhost:3000/api/review/';
  reviewList = [];
  reviewObs = new Subject();

  constructor(private http: HttpClient) { }

  submit(name :string, date :string, review :string, score :number) {
    const reviewItem = {
      name: name,
      score: score
    }
    this.http.post<any>(this.api_url, reviewItem)
      .subscribe(data => {
        this.reviewList.push(data);
        this.reviewObs.next([...this.reviewList])
        console.log(data);
      })
  }

  getList() {
    this.http.get<any>(this.api_url).subscribe(data => {
      this.reviewObs = data;
      this.reviewObs.next([...this.reviewList]);
    })
  }

  getSubscription(): any {
    return this.reviewObs.asObservable();
  }

  delete(id) {
    this.http.delete(this.api_url + id).subscribe(data => {
      this.reviewList = this.reviewList.filter(item => item._id !== id);
      this.reviewObs.next([...this.reviewList]);
    })
  }

  forceReload() {
    this.getList();
    this.reviewObs.next([...this.reviewList]);
  }

}
