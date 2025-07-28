import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { VendorService } from 'src/app/core/services/vendor.service';
import { Vendor } from 'src/app/shared/models/vendor.model';

@Component({
  selector: 'app-vendor-search',
  standalone: true,
  templateUrl: './vendor-search.component.html',
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatOptionModule,
  ],
  styleUrls: ['./vendor-search.component.scss'],
})
export class VendorSearchComponent {
  vendorSearchInfo = {
    title: 'Filtrar Vendedores',
  };
  vendors: Vendor[] = [];
  filteredVendors: Vendor[] = [];

  selectedCategory = '';
  selectedVehicle = '';

  categories: string[] = [];
  vehicles: string[] = [];

  constructor(private vendorService: VendorService) {}

  ngOnInit(): void {
    this.vendorService.vendors$.subscribe((data) => {
      this.vendors = data;
      this.filteredVendors = data;

      this.categories = [...new Set(data.map((v) => v.category))];
      this.vehicles = [...new Set(data.map((v) => v.vehicle))];
    });
  }

  ngOnChanges(): void {
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredVendors = this.vendors.filter(
      (v) =>
        (!this.selectedCategory || v.category === this.selectedCategory) &&
        (!this.selectedVehicle || v.vehicle === this.selectedVehicle)
    );
  }
}
