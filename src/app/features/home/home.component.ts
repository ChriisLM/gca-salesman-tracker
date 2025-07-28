import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public router: Router) {}

  get currentView(): 'map' | 'vendorSearch' | 'page1' {
    const url = this.router.url;

    if (url === '/home') {
      return 'map';
    } else if (url === '/home/vendor-search') {
      return 'vendorSearch';
    } else if (url === '/home/page') {
      return 'page1';
    }

    return 'map';
  }
}
