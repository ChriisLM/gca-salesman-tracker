import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navLinks = [
    { path: '/home', label: 'Mapa' },
    { path: '/home/vendor-search', label: 'Buscar Vendedores' },
    { path: '/home/page', label: 'Page 2' },
    { path: '/home/page', label: 'Page 3' },
  ];

  activeLink = this.navLinks[0];
}
