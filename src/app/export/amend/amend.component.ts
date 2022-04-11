import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-amend',
  template: `
    <h2>None</h2>
    <div class="none-message">No encapsulation</div>
  `,
  styles: ['h2, .none-message { color: red; }'],
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./amend.component.css']
})
export class AmendComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
