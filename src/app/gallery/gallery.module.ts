import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album/album.component';
import { UploadComponent } from './album/upload/upload.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    AlbumComponent,
    UploadComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class GalleryModule { }
