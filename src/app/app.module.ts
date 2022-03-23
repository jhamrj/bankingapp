import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TieredMenuModule} from 'primeng/tieredmenu';
import { MenuComponent } from './menu/menu.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { BookmarkComponent } from './bookmark/bookmark.component';
import { VideoComponent } from './video/video.component';
import { FileComponent } from './file/file.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { DeleteComponent } from './delete/delete.component';
import { ExportComponent } from './export/export.component';
import { CopyComponent } from './copy/copy.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BookmarkComponent,
    VideoComponent,
    FileComponent,
    EditComponent,
    NewComponent,
    DeleteComponent,
    ExportComponent,
    CopyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TieredMenuModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
