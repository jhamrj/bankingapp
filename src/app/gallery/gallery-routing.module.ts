import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AlbumComponent} from "./album/album.component";
import {UploadComponent} from "./album/upload/upload.component";
import {DownloadComponent} from "./album/download/download.component";
import * as photos from '../services/photo.json'
import * as countries from '../services/countries.json'

const routes: Routes = [{
  path:'Album',
  component:AlbumComponent,
  children:[{
    path:'Upload',
    component:UploadComponent
  },
    {
      path:'Download',
      component:DownloadComponent,
      data:[photos,countries]
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
