import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuComponent} from "./menu/menu.component";
import {FileComponent} from "./file/file.component";
import {NewComponent} from "./new/new.component";
import {BookmarkComponent} from "./bookmark/bookmark.component";
import {VideoComponent} from "./video/video.component";
import {EditComponent} from "./edit/edit.component";
import {DeleteComponent} from "./delete/delete.component";
import {ExportComponent} from "./export/export.component";
import {CopyComponent} from "./copy/copy.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {
    path:'Register',
    component:RegisterComponent
  },
  {
    path:'Login',
    component:LoginComponent
  },
  {
    path:'Menu',
    component:MenuComponent,
    children:[{
      path:'File',
      component:FileComponent,
      children:[{
        path:'New',
        component:NewComponent,
        children:[{
          path:'Bookmark',
          component:BookmarkComponent
        },
          {
            path:'Video',
            component:VideoComponent
          }
        ]
      },
        {
          path:'Delete',
          component:DeleteComponent
        },
        {
          path:'Export',
          component:ExportComponent
        }
      ]

    },
      {
        path:'Edit',
        component:EditComponent,
        children:[{
          path: 'Copy',
          component: CopyComponent
        }]
      },
      {
        path: 'Gallery',
        loadChildren: () => import('./gallery/gallery.module')
          .then(m => m.GalleryModule)

      }

    ],

  },
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: '**', redirectTo: '/Login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
