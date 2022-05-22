import { Component, OnInit, Input } from '@angular/core';

interface Menu {
  id: number;
  name: string;
}
@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss'],
})
export class BurgerMenuComponent implements OnInit {
  @Input() isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
  constructor() {}
  menu: Menu[] = [
    { id: 1, name: 'about me' },
    { id: 2, name: 'progect goals' },
    { id: 3, name: 'contact' },
    { id: 4, name: 'protfolio' },
  ];

  ngOnInit() {}
}
