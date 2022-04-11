import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-view',
  template: `
    <h2>Emulated</h2>
    <div class="emulated-message">Emulated encapsulation</div>
    <app-amend></app-amend>
  `,
  styles: ['h2, .emulated-message { color: green; }'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
