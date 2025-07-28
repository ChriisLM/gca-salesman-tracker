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
import { MatDialogModule } from '@angular/material/dialog';
import { VendorSearchComponent } from '../pages/vendor-search/vendor-search.component';
import { Page1Component } from '../pages/page1/page1.component';


@NgModule({
  declarations: [
    HomeComponent,
    MapComponent,
    VendorListComponent,
    VendorCardComponent,
    CleanAddressPipe
  ],
  imports: [
    VendorSearchComponent,
    Page1Component,
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class HomeModule { }
