export class MenuModel{
  private _label:any;
  private _items:Item[];


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

  get label(): any[] {
    return this._label;
  }

  set label(value: any[]) {
    this._label = value;
  }
}
