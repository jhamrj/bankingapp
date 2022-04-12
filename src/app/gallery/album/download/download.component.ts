import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  photosData:any;
  ngOnInit(): void {

    this.route.data.subscribe(response=>
      {
        console.log(response[0]);
        this.photosData=response[0].default;
      }
    )
  }

}
