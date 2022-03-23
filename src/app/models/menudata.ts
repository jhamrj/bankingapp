import {Item, MenuModel, SubItem} from "./menumodel";

export const MenuData:MenuModel[]=[new MenuModel('File',
  [new Item('New','pi pi-fw pi-plus',
    [new SubItem('Bookmark','pi pi-fw pi-bookmark'),
      new SubItem('Video','pi pi-fw pi-video')]),

  new Item('Delete','pi pi-fw pi-trash',[new SubItem('','')]),
    new Item('Export','pi pi-fw pi-external-link',[new SubItem('','')])
  ],


  ),
  new MenuModel('Edit',
    [new Item('copy','pi pi-fw pi-pencil',
      [new SubItem('','')])


    ],


  )

]

