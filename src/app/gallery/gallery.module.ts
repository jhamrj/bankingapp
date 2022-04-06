import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album/album.component';
import { UploadComponent } from './album/upload/upload.component';
import {RouterModule} from "@angular/router";
import {GalleryRoutingModule} from "./gallery-routing.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AlbumComponent,
    UploadComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    GalleryRoutingModule,
    ReactiveFormsModule
  ]
})
export class GalleryModule { }
