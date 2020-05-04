import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnChanges {
  @Input() currentRoute: string;
  @Output() logout: EventEmitter<any> = new EventEmitter<any>();
  mobileMenuOpen = false;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(change: SimpleChanges) {
    if (change.currentRoute) {

    }
  }
  openMobileMenu() {
    this.mobileMenuOpen = true;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
  onLogOut() {
    this.logout.emit();
  }
}
