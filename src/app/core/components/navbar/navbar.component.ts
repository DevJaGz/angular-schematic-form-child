import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from '../../constants/menu.constant';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  menuItems = MENU_ITEMS;
  constructor() {}

  ngOnInit(): void {}
}
