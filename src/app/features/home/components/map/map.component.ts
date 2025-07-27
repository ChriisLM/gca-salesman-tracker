import { Component, Input } from '@angular/core';
import * as L from 'leaflet';
import { Subscription } from 'rxjs';
import { VendorService } from 'src/app/core/services/vendor.service';
import { Vendor } from 'src/app/shared/models/vendor.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  vendors: Vendor[] = [];

  private map!: L.Map;
  private markers: { marker: L.Marker; vendor: Vendor }[] = [];
  private vendorSub!: Subscription;

  constructor(private vendorService: VendorService) {}

  ngOnInit(): void {
    this.vendorSub = this.vendorService.vendors$.subscribe((vendors) => {
      this.vendors = vendors;

      if (this.vendors.length === 0) {
        return;
      }
      if (!this.map) {
        this.initMap();
      }
      this.clearMarkers();
      this.loadMarkers();
    });
  }

  private initMap(): void {
    const first = this.vendors[0];
    this.map = L.map('map', {
      center: [first.coordinates.latitude, first.coordinates.longitude],
      zoom: 13,
      zoomControl: true,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(this.map);
  }

  private loadMarkers(): void {
    this.vendors.forEach((vendor) => {
      const marker = L.marker(
        [vendor.coordinates.latitude, vendor.coordinates.longitude],
        {
          icon: this.getVehicleIcon(vendor.vehicle),
        }
      ).addTo(this.map);

      marker.bindPopup(
        `<div style="text-align:center; max-width:200px;">
          <div style="position:relative;">
            <img src="assets/img/${vendor.photo}.jpg"
                alt="${vendor.name}"
                style="width:60px;height:60px;border-radius:50%;object-fit:cover;object-position:top;margin-bottom:6px;" />
            <span style="width:15px;height:15px;border-radius:50%;position:absolute;bottom:8px;right:20px;background-color:${
              vendor.isActive ? 'green' : 'red'
            };border:2px solid white;"></span>
          </div>
          <h4 style="margin:4px 0 2px;">${vendor.name}</h4>
          <p style="margin:0;font-size:0.85rem;color:#555;">${
            vendor.category
          }</p>
          <button onclick="alert('Ver más de ${vendor.name}')"
                  style="margin-top:6px;padding:4px 8px;font-size:0.8rem;background:#3f51b5;color:white;border:none;border-radius:4px;cursor:pointer;">
            Ver
          </button>
        </div>`
      );

      marker.on('click', () => {
        this.updateSelectedMarker(marker);
        this.map.flyTo(marker.getLatLng(), 14, {
          duration: 0.7,
          easeLinearity: 0.25,
        });
      });

      this.markers.push({ marker, vendor });
    });
  }

  private clearMarkers(): void {
    this.markers.forEach(({ marker }) => {
      this.map.removeLayer(marker);
    });
    this.markers = [];
  }

  private getVehicleIcon(vehicle: string): L.Icon {
    return L.icon({
      iconUrl: `assets/svg/${vehicle}.svg`,
      iconSize: [32, 40],
      iconAnchor: [16, 40],
      popupAnchor: [0, -40],
    });
  }

  private getCombinedIcon(vehicle: string): L.DivIcon {
    return L.divIcon({
      className: '',
      html: `
        <div style="position:relative;width:40px;height:40px;">
          <img src="assets/svg/pinselected.svg"
              style="position:absolute;top:0;left:-7px;width:54px;height:54px;" />
          <img src="assets/svg/${vehicle}.svg"
              style="position:absolute;top:0;left:0;width:40px;height:40px;" />
        </div>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    });
  }

  private updateSelectedMarker(selected: L.Marker): void {
    this.markers.forEach(({ marker, vendor }) => {
      if (marker === selected) {
        marker.setIcon(this.getCombinedIcon(vendor.vehicle));
      } else {
        marker.setIcon(this.getVehicleIcon(vendor.vehicle));
      }
    });
  }

  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove();
    }
    if (this.vendorSub) {
      this.vendorSub.unsubscribe();
    }
  }
}
