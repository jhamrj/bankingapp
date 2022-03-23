import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";
import {MenuService} from "../services/menu.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
   items: any;

  constructor(private menuService:MenuService) { }

  ngOnInit(): void {
    this.items=this.menuService.getMenuItems();
  }

}
