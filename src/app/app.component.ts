import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navLinks = [
    { path: '/home', label: 'Mapa' },
    { path: '/page', label: 'Page 1' },
    { path: '/page', label: 'Page 2' },
    { path: '/page', label: 'Page 3' },
  ];

  activeLink = this.navLinks[0];
}
