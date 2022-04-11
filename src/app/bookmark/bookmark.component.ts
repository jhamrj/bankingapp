import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {PageComponent} from "./page/page.component";
import {Renderer} from "@angular/compiler-cli/ngcc/src/rendering/renderer";

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {
  frequentPageName: any;
  frequentPageUrl: any;
  clicked: string;

  @ViewChild(PageComponent) pageComponent!: PageComponent;

  constructor() { }

  ngOnInit(): void {

    this.frequentPageName='Offers';
    this.frequentPageUrl='http://localhost:4200/offers'

  }

  actualColorChange() {
    //console.log("Back ground color will be changed......");
    console.log(this.pageComponent.toggle);
    if(!this.pageComponent.toggle)
       this.pageComponent.toggle=true;
    else
      this.pageComponent.toggle=false;
  }
}
