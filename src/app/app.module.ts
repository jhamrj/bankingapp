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
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatchValidatorDirective} from "./register/matchvalidator.directive";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MockService} from "./interceptors/mock.service";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import { MatSortModule } from '@angular/material/sort';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatDialogModule} from "@angular/material/dialog";
import { VideoeditComponent } from './video/videoedit/videoedit.component';
import {MatButtonModule} from "@angular/material/button";
import { VideodeleteComponent } from './video/videodelete/videodelete.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FileUploadModule} from "primeng/fileupload";
import { PageComponent } from './bookmark/page/page.component';



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
    CopyComponent,
    RegisterComponent,
    LoginComponent,
    MatchValidatorDirective,
    VideoeditComponent,
    VideodeleteComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TieredMenuModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule,
    FileUploadModule


  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MockService,
    multi: true
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
