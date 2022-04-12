import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album/album.component';
import { UploadComponent } from './album/upload/upload.component';
import {RouterModule} from "@angular/router";
import {GalleryRoutingModule} from "./gallery-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {FileUploadModule} from "primeng/fileupload";
import { DownloadComponent } from './album/download/download.component';



@NgModule({
  declarations: [
    AlbumComponent,
    UploadComponent,
    DownloadComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    GalleryRoutingModule,
    ReactiveFormsModule,
    FileUploadModule
  ]
})
export class GalleryModule { }
