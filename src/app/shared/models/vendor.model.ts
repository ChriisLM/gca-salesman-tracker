export interface Coordinates {
  latitude: number;
  longitude: number;
  height: number;
}

export interface Vendor {
  id: string;
  name: string;
  category: string;
  address: string;
  isActive: boolean;
  coordinates: Coordinates;
  photo: string;
  vehicle: string;
}

export type CreateVendor = Omit<Vendor, 'isActive' | 'coordinates'>;