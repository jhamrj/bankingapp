import {Item, MenuModel, SubItem} from "./menumodel";

export const MenuData:MenuModel[]=[new MenuModel('File',
  [new Item('New','pi pi-fw pi-plus',
    [new SubItem('Project'),new SubItem('Other')]),

  new Item('Open','',[new SubItem('')]),
    new Item('Quit','',[new SubItem('')])
  ],


  ),
  new MenuModel('Edit',
    [new Item('copy','pi pi-fw pi-pencil',
      [new SubItem('')])


    ],


  )

]

