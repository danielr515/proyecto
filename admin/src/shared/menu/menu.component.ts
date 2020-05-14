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
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  ngOnChanges(change: SimpleChanges) {
    if (change.currentRoute) {

    }
  }
  openMobileMenu() {
    this.mobileMenuOpen = true;
    this.scrollToTop();
    this.disableScroll();
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
    this.enableScroll();
  }
  onNavigate(route) {
    this.router.navigate([route]);
    this.closeMobileMenu();
  }
  onLogOut() {
    this.logout.emit();
  }


  scrollToTop() {
    window.scrollTo(0, 0);
  }
  disableScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = () => {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }

  enableScroll() {
    window.onscroll = () => { };
  }

}
