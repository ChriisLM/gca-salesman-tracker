import { Component, Input } from '@angular/core';
import * as L from 'leaflet';
import { VendorService } from 'src/app/core/services/vendor.service';
import { Vendor } from 'src/app/shared/models/vendor.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  // input provisional
  @Input() vendors: Vendor[] = [];

  //variables para el mapa

  private map!: L.Map; //mapa de leaflet
  private markers: L.Marker[] = []; //pines (en el mapa se llaman markas)

  // funcion para obtener los pines en svg
  private getVehicleIcon(vehicle: string): L.Icon {
    return L.icon({
      iconUrl: `assets/svg/${vehicle}.svg`,
      iconSize: [32, 40],
      iconAnchor: [16, 40],
      popupAnchor: [0, -40],
    });
  }

  ngAfterViewInit(): void {
    if (this.vendors.length === 0) return;

    // punto centralizado en el que empieza el mapa
    const centerLat = this.vendors[0].coordinates.latitude;
    const centerLng = this.vendors[0].coordinates.longitude;

    //creacion del mapa
    this.map = L.map('map', {
      center: [centerLat, centerLng],
      zoom: 13,
      zoomControl: true,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    this.loadMarkers();
  }

  private loadMarkers(): void {
    //añadir los pines
    this.vendors.forEach(vendor => {
      const marker = L.marker([
        vendor.coordinates.latitude,
        vendor.coordinates.longitude
      ],
      {
        icon: this.getVehicleIcon(vendor.vehicle)
      }
    ).addTo(this.map);

      marker.bindPopup(`
        <div style="text-align:center; max-width: 200px;">
          <img src="assets/img/${vendor.photo}.jpg"
              alt="${vendor.name}"
              style="width:60px; height:60px; border-radius:50%; object-fit:cover; margin-bottom:6px;" />
          <h4 style="margin: 4px 0 2px;">${vendor.name}</h4>
          <p style="margin:0; font-size:0.85rem; color: #555;">${vendor.category}</p>
          <button onclick="alert('Ver más de ${vendor.name}')" 
                  style="margin-top: 6px; padding: 4px 8px; font-size: 0.8rem; background: #3f51b5; color: white; border: none; border-radius: 4px; cursor: pointer;">
            Ver
          </button>
        </div>
      `);

      this.markers.push(marker);
    });
  }

  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove();
    }
  }
}
