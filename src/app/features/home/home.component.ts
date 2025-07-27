import { Component } from '@angular/core';
import { Vendor } from 'src/app/shared/models/vendor.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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
        longitude: -73.9268848,
        height: 50,
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
        latitude: 4.8165127,
        longitude: -74.0647848,
        height: 67
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
        latitude: 4.7532127,
        longitude: -74.0337848,
        height: 62,
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
        latitude: 4.6796127,
        longitude: -73.9235848,
        height: 18,
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
        latitude: 4.6763127,
        longitude: -73.9836848,
        height: 12,
      },
      photo: 'person6',
      vehicle: 'pin4',
    },
  ];
}
