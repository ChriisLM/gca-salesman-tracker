import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MapComponent } from './components/map/map.component';
import { VendorListComponent } from './components/vendor-list/vendor-list.component';
import { VendorCardComponent } from './components/vendor-card/vendor-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CleanAddressPipe } from 'src/app/shared/pipes/clean-address.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    MapComponent,
    VendorListComponent,
    VendorCardComponent,
    CleanAddressPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class HomeModule { }
