import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { VendorModalComponent } from './shared/components/vendor-modal/vendor-modal.component';
import { MatDialogModule } from "@angular/material/dialog";
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    VendorModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule,
    HttpClientModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
