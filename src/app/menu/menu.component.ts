import { Component, OnInit, Input } from '@angular/core';

interface Menu {
  id: number;
  name: string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
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
