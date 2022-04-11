import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  @Input()
  pageName:string;
  @Input()
  pageUrl:string;

  toggle:boolean;


  constructor() { }

  ngOnInit(): void {
    this.toggle=false;
  }


}
