import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";
import {MenuService} from "../services/menu.service";
import {Router} from "@angular/router";

@Component({
  selector: 'bank-menu',
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
