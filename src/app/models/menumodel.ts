export class MenuModel{
  private _label:any;
  private _items:Item[];
  constructor(label:any,items:Item[]) {
    this._label=label;
    this._items=items;
  }

  get label(): any {
    return this._label;
  }

  set label(value: any) {
    this._label = value;
  }

  get items(): Item[] {
    return this._items;
  }

  set items(value: Item[]) {
    this._items = value;
  }
}

export class Item{
 private _label:any;
 private _icon:any;
 private _items:SubItem[];
  constructor(label:any,icon:any,items:SubItem[]) {
    this._label=label;
    this._icon=icon;
    this._items=items;
  }
  get label(): any {
    return this._label;
  }

  set label(value: any) {
    this._label = value;
  }

  get icon(): any {
    return this._icon;
  }

  set icon(value: any) {
    this._icon = value;
  }

  get items(): SubItem[] {
    return this._items;
  }

  set items(value: SubItem[]) {
    this._items = value;
  }
}
export class SubItem{
  private _label:any[]
  private _icon:any;
  constructor(label:any,icon:any) {
    this._icon=icon;
    this._label=label;


  }


  get icon(): any {
    return this._icon;
  }

  set icon(value: any) {
    this._icon = value;
  }

  get label(): any[] {
    return this._label;
  }

  set label(value: any[]) {
    this._label = value;
  }
}
