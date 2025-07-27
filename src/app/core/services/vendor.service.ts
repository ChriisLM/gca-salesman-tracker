import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, switchMap } from 'rxjs';
import { CreateVendor, Vendor } from 'src/app/shared/models/vendor.model';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  private vendorsSubject = new BehaviorSubject<Vendor[]>([]);
  vendors$ = this.vendorsSubject.asObservable();

  private readonly API_URL = 'http://52.188.225.26/api/salesman';

  constructor(private http: HttpClient) {
    interval(30000).pipe(
      switchMap(() => this.http.get<Vendor[]>(this.API_URL))
    ).subscribe((vendors) => {
      this.vendorsSubject.next(vendors);
    });

    this.http.get<Vendor[]>(this.API_URL).subscribe((vendors) => {
      this.vendorsSubject.next(vendors);
    });
  }

  //por id
  getVendorById(id: string) {
    return this.http.get<Vendor>(`${this.API_URL}/${id}`);
  }

  //crear nuevo
  createVendor(vendor: CreateVendor) {
    return this.http.post<CreateVendor>(this.API_URL, vendor);
  }
}
