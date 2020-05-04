import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppAction } from 'src/core/state/app.actions';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(
    private router: Router,
    private action: AppAction,
  ) { }

  ngOnInit() {
    this.action.updateCurrentRoute(this.router.url);
  }

}
