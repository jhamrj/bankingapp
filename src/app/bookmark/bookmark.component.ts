import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {
  frequentPageName: any;
  frequentPageUrl: any;
  clicked: string;

  constructor() { }

  ngOnInit(): void {

    this.frequentPageName='Offers';
    this.frequentPageUrl='http://localhost:4200/offers'
  }

  actualColorChange() {
    console.log("Back ground color will be changed......");

  }
}
