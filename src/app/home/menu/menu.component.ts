import { Component, OnInit, Input } from '@angular/core';

interface Menu {
  id: number;
  name: MenuType;
  link: string;
}
type MenuType = 'about me' | 'progect goals' | 'contact' | 'protfolio';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() isOpen = false;

  constructor() {}
  menu: Menu[] = [
    { id: 1, name: 'about me', link: 'about-me' },
    { id: 2, name: 'progect goals', link: 'project-goals' },
    { id: 3, name: 'contact', link: 'contact' },
    { id: 4, name: 'protfolio', link: 'protfolio' },
  ];

  ngOnInit() {}
}
