import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album/album.component';
import { UploadComponent } from './album/upload/upload.component';
import {RouterModule} from "@angular/router";
import {GalleryRoutingModule} from "./gallery-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FileUploadModule} from "primeng/fileupload";
import { DownloadComponent } from './album/download/download.component';
import { PhotoPipe } from './album/download/photo.pipe';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    AlbumComponent,
    UploadComponent,
    DownloadComponent,
    PhotoPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    GalleryRoutingModule,
    ReactiveFormsModule,
    FileUploadModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatInputModule
  ]
})
export class GalleryModule { }
