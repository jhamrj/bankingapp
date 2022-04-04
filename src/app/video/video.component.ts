import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
const DATA_URL='http://localhost:4200/Menu/File/New/Video'
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  comments:any
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {

    this.httpClient.get(DATA_URL).subscribe((data) => {
      console.log(data);
      this.comments = data;
    });
  }

}
