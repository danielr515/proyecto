import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnChanges {
  @Input() currentRoute: string;
  @Output() logout: EventEmitter<any> = new EventEmitter<any>();
  mobileMenuOpen = false;
  constructor(private router: Router) { }

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
  onNavigate(route) {
    this.router.navigate([route]);
  }
  onLogOut() {
    this.logout.emit();
  }
}
