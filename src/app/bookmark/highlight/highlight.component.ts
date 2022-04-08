import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.css']
})
export class HighlightComponent implements OnInit {
  @Output('highlight')
  change=new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  changeColor() {
    this.change.emit();
  }
}
