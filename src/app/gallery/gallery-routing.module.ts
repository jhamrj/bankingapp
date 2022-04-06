import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AlbumComponent} from "./album/album.component";
import {UploadComponent} from "./album/upload/upload.component";

const routes: Routes = [{
  path:'Album',
  component:AlbumComponent,
  children:[{
    path:'Upload',
    component:UploadComponent
  }]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
