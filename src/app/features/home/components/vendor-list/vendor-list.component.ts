import { Component } from '@angular/core';
import { Vendor } from 'src/app/shared/models/vendor.model';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss'],
})
export class VendorListComponent {
  //informacion del componente
  vendorList = {
    title: 'listado de localizaciones',
    description: 'listado de dispositivos que reportan su posicion'
  }

  //informacion de los vendedores de prueba
  vendors: Vendor[] = [
    {
      id: 'v001',
      name: 'Juan Pérez',
      category: 'Vendedor Senior',
      address: 'Calle 123 #45-67, Bogotá',
      isActive: false,
      coordinates: {
        latitude: 4.7515127,
        longitude: -74.08328479999999,
        height: 65.0,
      },
      photo: 'person1',
      vehicle: 'grua',
    },
    {
      id: 'v001',
      name: 'Juan Pérez',
      category: 'Vendedor Senior',
      address: 'Calle 123 #45-67, Bogotá',
      isActive: false,
      coordinates: {
        latitude: 4.7515127,
        longitude: -74.08328479999999,
        height: 65.0,
      },
      photo: 'person2',
      vehicle: 'moto',
    },
    {
      id: 'v001',
      name: 'Juan Pérez',
      category: 'Vendedor Senior',
      address: 'Calle 123 #45-67, Bogotá',
      isActive: true,
      coordinates: {
        latitude: 4.7515127,
        longitude: -74.08328479999999,
        height: 65.0,
      },
      photo: 'person3',
      vehicle: 'carro',
    },
    {
      id: 'v001',
      name: 'Juan Pérez',
      category: 'Vendedor Senior',
      address: 'Calle 123 #45-67, Bogotá',
      isActive: false,
      coordinates: {
        latitude: 4.7515127,
        longitude: -74.08328479999999,
        height: 65.0,
      },
      photo: 'person4',
      vehicle: 'ambulancia',
    },
    {
      id: 'v001',
      name: 'Juan Pérez',
      category: 'Vendedor Senior',
      address: 'Calle 123 #45-67, Bogotá',
      isActive: false,
      coordinates: {
        latitude: 4.7515127,
        longitude: -74.08328479999999,
        height: 65.0,
      },
      photo: 'person5',
      vehicle: 'sinvehiculo',
    },
    {
      id: 'v001',
      name: 'Juan Pérez',
      category: 'Vendedor Senior',
      address: 'Calle 123 #45-67, Bogotá',
      isActive: true,
      coordinates: {
        latitude: 4.7515127,
        longitude: -74.08328479999999,
        height: 65.0,
      },
      photo: 'person6',
      vehicle: 'pin4',
    },
  ];
}
