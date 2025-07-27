import { Component, HostListener } from '@angular/core';
import { CreateVendor } from '../../models/vendor.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialogRef } from '@angular/material/dialog';
import { VendorService } from 'src/app/core/services/vendor.service';

@Component({
  selector: 'app-vendor-modal',
  templateUrl: './vendor-modal.component.html',
  styleUrls: ['./vendor-modal.component.scss'],
})
export class VendorModalComponent {
  vendorForm: FormGroup;
  photoOptions = [
    'person1',
    'person2',
    'person3',
    'person4',
    'person5',
    'person6',
  ];
  vehicleOptions = ['ambulancia', 'carro', 'grua', 'moto', 'sinvehiculo'];

  constructor(
    private dialogRef: MatDialogRef<VendorModalComponent>,
    private fb: FormBuilder,
    private vendorService: VendorService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    this.vendorForm = this.fb.group({
      id: [this.generateId(), Validators.required],
      name: ['', Validators.required],
      category: ['', Validators.required],
      address: ['', Validators.required],
      photo: ['person1'],
      vehicle: ['sinvehiculo'],
    });

    this.vehicleOptions.forEach((icon) =>
      iconRegistry.addSvgIcon(
        icon,
        sanitizer.bypassSecurityTrustResourceUrl(`assets/svg/${icon}.svg`)
      )
    );
  }

  //genera el id con formato
  generateId(): string {
    let id = 'v001';
    this.vendorService.vendors$.subscribe((vendors) => {
      const count = vendors.length + 1;
      id = `v${count.toString().padStart(3, '0')}`;
    });
    return id;
  }

  //funcion para crear el nuevo vendor
  onSubmit(): void {
    if (this.vendorForm.valid) {
      const vendorData: CreateVendor = this.vendorForm.value;

      this.vendorService.createVendor(vendorData).subscribe({
        next: (response) => {
          console.log('Vendor creado:', response);
          this.dialogRef.close();
        },
        error: (error) => {
          console.error('Error al crear vendor:', error);
        },
      });
    }
  }

  //funciones para salir de la modal
  onCancel(): void {
    this.dialogRef.close();
  }

  @HostListener('document:click', ['$event'])
  closeOnOutsideClick(event: MouseEvent) {
    const overlayContainer = document.querySelector('.modal-overlay');
    const target = event.target as HTMLElement;
    if (target.closest('.modal-card') || !overlayContainer?.contains(target)) {
      return;
    }

    this.dialogRef.close();
  }
}
