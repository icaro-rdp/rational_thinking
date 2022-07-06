import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss'],
})
export class BurgerComponent implements OnInit {
  constructor() {}

  @Input() isOpen: boolean = false;

  openBurger() {
    this.isOpen = !this.isOpen;
  }
  ngOnInit() {}
}
