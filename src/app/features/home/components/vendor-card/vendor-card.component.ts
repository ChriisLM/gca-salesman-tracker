import { Component, Input } from '@angular/core';
import { Vendor } from 'src/app/shared/models/vendor.model';

@Component({
  selector: 'app-vendor-card',
  templateUrl: './vendor-card.component.html',
  styleUrls: ['./vendor-card.component.scss']
})
export class VendorCardComponent {
  @Input() vendor!: Vendor;
}
