import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingsRoutingModule } from './bookings-routing.module';
import { NewBookingsComponent } from './components/new-bookings/new-bookings.component';
import { PastBookingsComponent } from './components/past-bookings/past-bookings.component';
import { SharedModule } from '../shared/shared.module';
import { FilterComponent } from './components/filter/filter.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [NewBookingsComponent, PastBookingsComponent, FilterComponent],
  imports: [
    CommonModule,
    BookingsRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class BookingsModule { }
