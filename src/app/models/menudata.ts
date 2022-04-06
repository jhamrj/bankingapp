import {Item, MenuModel, SubItem} from "./menumodel";

export const MenuData:MenuModel[]=[new MenuModel('File',
  [new Item('New','pi pi-fw pi-plus',
    [new SubItem('Bookmark','pi pi-fw pi-bookmark','File/New/Bookmark'),
      new SubItem('Video','pi pi-fw pi-video','File/New/Video')],'File/New'),

  new Item('Delete','pi pi-fw pi-trash',
    [new SubItem('','','')],'File/Delete'),
    new Item('Export','pi pi-fw pi-external-link',[new SubItem('',
      '','')],'File/Export')
  ],'File',


  ),
  new MenuModel('Edit',
    [new Item('copy','pi pi-fw pi-pencil',
      [new SubItem('','','')],'Edit/Copy')


    ],'Edit',


  ),
  new MenuModel('Gallery',
    [new Item('album','pi pi-fw pi-pencil',
      [new SubItem('upload','','Gallery/Album/Upload')],'Gallery/Album')


    ],'Gallery',),


]

