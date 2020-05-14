import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {
  @Input() tabs;
  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  changePage(url) {
    if (this.router.url != url) {
      this.router.navigate([url]);
    }
  }

}
