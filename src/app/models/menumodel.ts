export class MenuModel{
  private _label:any;
  private _items:Item[];
  private _routerLink:any;
  constructor(label:any,items:Item[],routerLink:any) {
    this._label=label;
    this._items=items;
    this._routerLink=routerLink;
  }

  get routerLink(): any {
    return this._routerLink;
  }

  set routerLink(value: any) {
    this._routerLink = value;
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
 private _routerLink:any;
 private _items:SubItem[];
  constructor(label:any,icon:any,items:SubItem[],routerLink:any) {
    this._label=label;
    this._icon=icon;
    this._items=items;
    this._routerLink=routerLink;
  }


  get routerLink(): any {
    return this._routerLink;
  }

  set routerLink(value: any) {
    this._routerLink = value;
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
  private _routerLink:any;
  private _icon:any;
  constructor(label:any,icon:any,routerLink:any) {
    this._routerLink=routerLink;
    this._icon=icon;
    this._label=label;


  }


  get routerLink(): any {
    return this._routerLink;
  }

  set routerLink(value: any) {
    this._routerLink = value;
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
