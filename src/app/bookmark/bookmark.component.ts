import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {
  frequentPageName: any;
  frequentPageUrl: any;

  constructor() { }

  ngOnInit(): void {

    this.frequentPageName='Offers';
    this.frequentPageUrl='http://localhost:4200'
  }

}
