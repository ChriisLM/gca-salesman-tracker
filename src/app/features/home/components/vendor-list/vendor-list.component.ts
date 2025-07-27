import { Component } from '@angular/core';
import { VendorModalComponent } from 'src/app/shared/components/vendor-modal/vendor-modal.component';
import { Vendor } from 'src/app/shared/models/vendor.model';
import { MatDialog } from '@angular/material/dialog';
import { VendorService } from 'src/app/core/services/vendor.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss'],
})
export class VendorListComponent {
  vendors: Vendor[] = [];
  private subscription!: Subscription;

  constructor(private dialog: MatDialog,private vendorService: VendorService) {}
  ngOnInit(): void {
    this.subscription = this.vendorService.vendors$.subscribe((vendors) => {
      this.vendors = vendors;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  //informacion del componente
  vendorList = {
    title: 'listado de localizaciones',
    description: 'listado de dispositivos que reportan su posicion',
  };

  openCreateVendorModal(): void {
    this.dialog.open(VendorModalComponent);
  }
}
