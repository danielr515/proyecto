import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  mobileMenuOpen = false;
  constructor() { }

  ngOnInit() {
  }

  openMobileMenu() {
    this.mobileMenuOpen = true;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }

}
